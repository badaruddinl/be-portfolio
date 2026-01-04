import { Repository } from 'typeorm'
import { AppDataSource } from '@/connections/database'
import { Project, ProjectFeature, ProjectCollaborator, ProjectTech } from '@/schemas'
import { CreateProjectDto, UpdateProjectDto } from '../dto/project'

export class ProjectRepository {
  private repo: Repository<Project>

  constructor() {
    this.repo = AppDataSource.getRepository(Project)
  }

  async getAll() {
    return this.repo.find({
      relations: ['features', 'collaborators', 'techs', 'techs.tech'],
      order: { year: 'DESC' },
    })
  }

  async getOne(id: string) {
    return this.repo.findOneOrFail({
      where: { id },
      relations: ['features', 'collaborators', 'techs', 'techs.tech'],
    })
  }

  async create(data: CreateProjectDto) {
    return AppDataSource.transaction(async (manager) => {
      // 1. Simpan Project Utama
      // Kita pisahkan data relasi agar tidak error saat create entity Project
      const { features, collaborators, tech_stack_ids, ...projectData } = data

      const project = manager.create(Project, {
        ...projectData,
        images: projectData.images ?? null,
        live_url: projectData.live_url ?? null,
        source_url: projectData.source_url ?? null,
      })
      const savedProject = await manager.save(project)

      // 2. Simpan Features
      if (features && features.length > 0) {
        const featureEntities = features.map((desc) =>
          manager.create(ProjectFeature, {
            description: desc,
            project: savedProject,
          }),
        )
        await manager.save(featureEntities)
      }

      // 3. Simpan Collaborators
      if (collaborators && collaborators.length > 0) {
        const collabEntities = collaborators.map((c) =>
          manager.create(ProjectCollaborator, {
            ...c,
            url: c.url ?? null,
            project: savedProject,
          }),
        )
        await manager.save(collabEntities)
      }

      // 4. Simpan Tech Stacks (Junction Table)
      if (tech_stack_ids && tech_stack_ids.length > 0) {
        const techEntities = tech_stack_ids.map((techId) =>
          manager.create(ProjectTech, {
            project: savedProject,
            tech: { id: techId }, // TypeORM cukup butuh ID untuk relasi
          }),
        )
        await manager.save(techEntities)
      }

      return this.getOne(savedProject.id)
    })
  }

  async update(id: string, data: UpdateProjectDto) {
    // Strategi Update: Hapus relasi lama -> Insert baru (Full Replace)
    // Ini lebih aman daripada diffing manual untuk struktur nested ini.

    return AppDataSource.transaction(async (manager) => {
      const { features, collaborators, tech_stack_ids, ...projectData } = data

      // 1. Update data basic project
      await manager.update(Project, id, {
        ...projectData,
        // Handle nullable fields explicitly if needed, or let partial update work
      })
      const project = await manager.findOneByOrFail(Project, { id })

      // 2. Handle Features (Jika dikirim array kosong, berarti hapus semua)
      if (features !== undefined) {
        await manager.delete(ProjectFeature, { project: { id } })
        if (features.length > 0) {
          const newFeatures = features.map((desc) =>
            manager.create(ProjectFeature, { description: desc, project }),
          )
          await manager.save(newFeatures)
        }
      }

      // 3. Handle Collaborators
      if (collaborators !== undefined) {
        await manager.delete(ProjectCollaborator, { project: { id } })
        if (collaborators.length > 0) {
          const newCollabs = collaborators.map((c) =>
            manager.create(ProjectCollaborator, { ...c, url: c.url ?? null, project }),
          )
          await manager.save(newCollabs)
        }
      }

      // 4. Handle Tech Stacks
      if (tech_stack_ids !== undefined) {
        await manager.delete(ProjectTech, { project: { id } })
        if (tech_stack_ids.length > 0) {
          const newTechs = tech_stack_ids.map((techId) =>
            manager.create(ProjectTech, { project, tech: { id: techId } }),
          )
          await manager.save(newTechs)
        }
      }

      return this.getOne(id)
    })
  }
}
