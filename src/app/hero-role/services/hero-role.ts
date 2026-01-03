import { HeroRoleRepository } from '../repositories/hero-role'

export class HeroRoleService {
  constructor(private readonly repo: HeroRoleRepository) {}

  async addRole(dto: { heroId: string; name: string }) {
    const existing = await this.repo.findByHero(dto.heroId)

    if (existing.some((r) => r.name.toLowerCase() === dto.name.toLowerCase())) {
      throw new Error('Role already exists for this hero')
    }

    return this.repo.create(dto)
  }

  async updateRole(id: string, dto: { name: string }) {
    return this.repo.update(id, dto)
  }

  async removeRole(id: string) {
    return this.repo.delete(id)
  }

  async listRoles(heroId: string) {
    return this.repo.findByHero(heroId)
  }
}
