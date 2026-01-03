import { CreateSocialTypeDto, UpdateSocialTypeDto } from '../dto/social-type'
import { SocialTypeRepository } from '../repositories/social-type'

export class SocialTypeService {
  private repo = new SocialTypeRepository()

  getAll() {
    return this.repo.findAll()
  }

  async create(dto: CreateSocialTypeDto) {
    const exist = await this.repo.findByCode(dto.code)

    if (exist) throw new Error('social type already exists')

    return this.repo.create({
      code: dto.code,
      label: dto.label,
      icon: dto.icon ?? null,
      base_url: dto.baseUrl ?? null,
      is_active: true,
    })
  }

  async update(id: string, dto: UpdateSocialTypeDto) {
    return this.repo.update(id, {
      label: dto.label,
      icon: dto.icon ?? null,
      base_url: dto.baseUrl ?? null,
      is_active: dto.isActive ?? true,
    })
  }

  delete(id: string) {
    return this.repo.delete(id)
  }
}
