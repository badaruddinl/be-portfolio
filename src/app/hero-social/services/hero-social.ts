import { CreateHeroSocialDto, UpdateHeroSocialDto } from '../dto/hero-social'
import { HeroSocialRepository } from '../repositories/hero-social'

export class HeroSocialService {
  constructor(private repo = new HeroSocialRepository()) {}

  getByHero(heroId: string) {
    return this.repo.findByHero(heroId)
  }

  create(dto: CreateHeroSocialDto) {
    return this.repo.create({
      url: dto.url,
      hero: { id: dto.heroId } as any,
      type: { id: dto.socialTypeId } as any,
    })
  }

  async update(id: string, dto: UpdateHeroSocialDto) {
    const payload: any = {}

    if (dto.url) payload.url = dto.url
    if (dto.socialTypeId) payload.type = { id: dto.socialTypeId }

    await this.repo.update(id, payload)

    return { id }
  }

  delete(id: string) {
    return this.repo.delete(id)
  }
}
