import { Repository } from 'typeorm'
import { AppDataSource } from '@/connections/database'
import { TechStack, TechStackVersion } from '@/schemas'
import {
  CreateTechStackDto,
  CreateTechStackVersionDto,
  UpdateTechStackDto,
} from '../dto/tech-stack'

export class TechStackRepository {
  private repo: Repository<TechStack>
  private versionRepo: Repository<TechStackVersion>

  constructor() {
    this.repo = AppDataSource.getRepository(TechStack)
    this.versionRepo = AppDataSource.getRepository(TechStackVersion)
  }

  async getAll() {
    return this.repo.find({
      relations: ['versions'],
      order: { name: 'ASC' },
    })
  }

  async getOne(id: string) {
    return this.repo.findOneOrFail({
      where: { id },
      relations: ['versions'],
    })
  }

  // Create Parent (dan optional initial version)
  async create(data: CreateTechStackDto) {
    return AppDataSource.transaction(async (manager) => {
      // 1. Create Parent
      // PERBAIKAN DI SINI: Gunakan '?? null' untuk menangani undefined
      const techStack = manager.create(TechStack, {
        name: data.name,
        icon: data.icon ?? null,
      })
      const savedTech = await manager.save(techStack)

      // 2. Create Initial Version if exists
      if (data.initial_version) {
        const version = manager.create(TechStackVersion, {
          ...data.initial_version,
          tech: savedTech,
        })
        await manager.save(version)
      }

      // Return full data
      return manager.findOne(TechStack, {
        where: { id: savedTech.id },
        relations: ['versions'],
      })
    })
  }

  async update(id: string, data: UpdateTechStackDto) {
    // Untuk update, kita bisa membiarkan undefined agar field tidak tersentuh,
    // tapi jika ingin menghapus nilai, user harus kirim null.
    await this.repo.update(id, data)
    return this.getOne(id)
  }

  // Khusus untuk menambah versi baru ke tech yang sudah ada
  async addVersion(techId: string, data: CreateTechStackVersionDto) {
    const tech = await this.getOne(techId) // Pastikan parent ada

    const newVersion = this.versionRepo.create({
      ...data,
      tech: tech,
    })

    await this.versionRepo.save(newVersion)
    return this.getOne(techId) // Return parent dengan list version terbaru
  }
}
