import { CreateHeroDto, UpdateHeroDto } from '../dto/hero'
import { HeroRepository } from '../repositories/hero'

export class HeroService {
  constructor(private repo = new HeroRepository()) {}

  async getHero() {
    return this.repo.getSingleton()
  }

  async createHero(data: CreateHeroDto) {
    const existing = await this.repo.getSingleton()

    if (existing) {
      throw new Error('Hero already exists (only one allowed)')
    }

    return this.repo.create(data)
  }

  async updateHero(id: string, data: UpdateHeroDto) {
    return this.repo.update(id, data)
  }
}
