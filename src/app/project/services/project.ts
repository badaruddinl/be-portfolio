import { CreateProjectDto, UpdateProjectDto } from '../dto/project'
import { ProjectRepository } from '../repositories/project'

export class ProjectService {
  constructor(private repo = new ProjectRepository()) {}

  async getProjects() {
    return this.repo.getAll()
  }

  async getProjectDetail(id: string) {
    return this.repo.getOne(id)
  }

  async createProject(data: CreateProjectDto) {
    return this.repo.create(data)
  }

  async updateProject(id: string, data: UpdateProjectDto) {
    return this.repo.update(id, data)
  }
}
