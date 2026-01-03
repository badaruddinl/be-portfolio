import { Repository } from 'typeorm'

import { CreateHeroDto, UpdateHeroDto } from '../dto/hero'
import { AppDataSource } from '@/connections/database'
import { Hero } from '@/schemas'

export class HeroRepository {
  private repo: Repository<Hero>

  constructor() {
    this.repo = AppDataSource.getRepository(Hero)
  }

  async getSingleton() {
    return this.repo.findOne({
      relations: ['roles', 'socials'],
    })
  }

  async create(data: CreateHeroDto) {
    const hero = this.repo.create(data)
    return this.repo.save(hero)
  }

  async update(id: string, data: UpdateHeroDto) {
    await this.repo.update(id, data)
    return this.repo.findOneOrFail({
      where: { id },
      relations: ['roles', 'socials'],
    })
  }
}
