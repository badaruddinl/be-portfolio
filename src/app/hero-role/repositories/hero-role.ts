import { AppDataSource } from '@/connections/database'
import { CreateHeroRoleDto, UpdateHeroRoleDto } from '../dto/hero-role'

import { Hero, HeroRole } from '@/schemas'

export class HeroRoleRepository {
  private repo = AppDataSource.getRepository(HeroRole)
  private heroRepo = AppDataSource.getRepository(Hero)

  async findByHero(heroId: string) {
    return this.repo.find({
      where: { hero: { id: heroId } },
      relations: ['hero'],
    })
  }

  async create(dto: CreateHeroRoleDto) {
    const hero = await this.heroRepo.findOneByOrFail({ id: dto.heroId })

    const role = this.repo.create({
      name: dto.name,
      hero,
    })

    return this.repo.save(role)
  }

  async update(id: string, dto: UpdateHeroRoleDto) {
    await this.repo.update(id, dto)
    return this.repo.findOneByOrFail({ id })
  }

  async delete(id: string) {
    await this.repo.delete(id)
  }
}
