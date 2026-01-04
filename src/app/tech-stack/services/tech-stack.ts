import {
  CreateTechStackDto,
  CreateTechStackVersionDto,
  UpdateTechStackDto,
} from '../dto/tech-stack'
import { TechStackRepository } from '../repositories/tech-stack'

export class TechStackService {
  constructor(private repo = new TechStackRepository()) {}

  async getTechStacks() {
    return this.repo.getAll()
  }

  async getTechStackDetail(id: string) {
    return this.repo.getOne(id)
  }

  async createTechStack(data: CreateTechStackDto) {
    return this.repo.create(data)
  }

  async updateTechStack(id: string, data: UpdateTechStackDto) {
    return this.repo.update(id, data)
  }

  async addTechStackVersion(id: string, data: CreateTechStackVersionDto) {
    return this.repo.addVersion(id, data)
  }
}
