import { Repository } from 'typeorm'

import { AppDataSource } from '@/connections/database'
import { SocialType } from '@/schemas'

export class SocialTypeRepository {
  private repo: Repository<SocialType>

  constructor() {
    this.repo = AppDataSource.getRepository(SocialType)
  }

  findAll() {
    return this.repo.find()
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } })
  }

  findByCode(code: string) {
    return this.repo.findOne({ where: { code } })
  }

  create(data: Partial<SocialType>) {
    const entity = this.repo.create(data)
    return this.repo.save(entity)
  }

  async update(id: string, data: Partial<SocialType>) {
    await this.repo.update({ id }, data)
    return this.findById(id)
  }

  async delete(id: string) {
    await this.repo.delete({ id })
  }
}
