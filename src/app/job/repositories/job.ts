import { Repository } from 'typeorm'
import { AppDataSource } from '@/connections/database'
import { Job } from '@/schemas'
import { CreateJobDto, UpdateJobDto } from '../dto/job'

export class JobRepository {
  private repo: Repository<Job>

  constructor() {
    this.repo = AppDataSource.getRepository(Job)
  }

  async getAll() {
    return this.repo.find({
      order: { start_date: 'DESC' },
    })
  }

  async getOne(id: string) {
    return this.repo.findOneOrFail({ where: { id } })
  }

  async create(data: CreateJobDto) {
    const job = this.repo.create(data)
    return this.repo.save(job)
  }

  async update(id: string, data: UpdateJobDto) {
    await this.repo.update(id, data)
    return this.repo.findOneOrFail({ where: { id } })
  }

  async delete(id: string) {
    return this.repo.delete(id)
  }
}
