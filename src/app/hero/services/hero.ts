import { BadRequestError, NotFoundError } from '@/errorDecorator/fastifyError'
import { CreateHeroDto, UpdateHeroDto } from '../dto/hero'
import { HeroRepository } from '../repositories/hero'

export class HeroService {
  constructor(private repo = new HeroRepository()) {}

  async getHero() {
    const existing = await this.repo.getSingleton()
    if (!existing) {
      throw new NotFoundError('Hero not found')
    }
    return this.repo.getSingleton()
  }

  async createHero(data: CreateHeroDto) {
    const existing = await this.repo.getSingleton()

    if (existing) {
      throw new BadRequestError('Hero already exists (only one allowed)')
    }

    return this.repo.create(data)
  }

  async updateHero(id: string, data: UpdateHeroDto) {
    return this.repo.update(id, data)
  }
}
