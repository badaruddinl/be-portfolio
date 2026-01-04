import { CreateJobDto, UpdateJobDto } from '../dto/job'
import { JobRepository } from '../repositories/job'

export class JobService {
  constructor(private repo = new JobRepository()) {}

  async getJobs() {
    return this.repo.getAll()
  }

  async getJobDetail(id: string) {
    return this.repo.getOne(id)
  }

  async createJob(data: CreateJobDto) {
    return this.repo.create(data)
  }

  async updateJob(id: string, data: UpdateJobDto) {
    return this.repo.update(id, data)
  }

  async deleteJob(id: string) {
    return this.repo.delete(id)
  }
}
