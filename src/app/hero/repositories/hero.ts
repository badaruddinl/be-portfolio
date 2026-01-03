import { HeroSocial } from './hero-social.schema'

import { CreateHeroDto, UpdateHeroDto } from '../dto/hero'
import { AppDataSource } from '@/connections/database'
import { Hero, HeroRole } from '@/schemas'

export class HeroRepository {
  private heroRepo = AppDataSource.getRepository(Hero)
  private socialRepo = AppDataSource.getRepository(HeroSocial)
  private roleRepo = AppDataSource.getRepository(HeroRole)

  findAll() {
    return this.heroRepo.find({
      relations: ['socials', 'socials.type', 'roles'],
    })
  }

  async create(data: CreateHeroDto) {
    const hero = this.heroRepo.create({
      ...data,
      socials: [],
      roles: [],
    })

    await this.heroRepo.save(hero)

    for (const r of data.roles) {
      await this.roleRepo.save(
        this.roleRepo.create({
          name: r.name,
          hero,
        }),
      )
    }

    for (const s of data.socials) {
      await this.socialRepo.save(
        this.socialRepo.create({
          hero,
          type: { id: s.typeId } as any,
          url: s.url,
        }),
      )
    }

    return this.findById(hero.id)
  }

  findById(id: string) {
    return this.heroRepo.findOne({
      where: { id },
      relations: ['socials', 'socials.type', 'roles'],
    })
  }

  async update(id: string, payload: UpdateHeroDto) {
    await this.heroRepo.update(id, payload)
    return this.findById(id)
  }
}
