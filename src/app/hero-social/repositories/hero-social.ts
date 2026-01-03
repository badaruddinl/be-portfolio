import { AppDataSource } from '@/connections/database'
import { HeroSocial } from '@/schemas'
import { Repository } from 'typeorm'

export class HeroSocialRepository {
  private repo: Repository<HeroSocial>

  constructor() {
    this.repo = AppDataSource.getRepository(HeroSocial)
  }

  findByHero(heroId: string) {
    return this.repo.find({
      where: { hero: { id: heroId } },
      order: { id: 'ASC' },
    })
  }

  create(data: Partial<HeroSocial>) {
    return this.repo.save(this.repo.create(data))
  }

  update(id: string, data: Partial<HeroSocial>) {
    return this.repo.update(id, data)
  }

  delete(id: string) {
    return this.repo.delete(id)
  }
}
