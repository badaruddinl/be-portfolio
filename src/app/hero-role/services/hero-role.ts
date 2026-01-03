import { HeroRoleRepository } from '../repositories/hero-role'

export class HeroRoleService {
  private readonly heroRoleRepository: HeroRoleRepository
  constructor() {
    this.heroRoleRepository = new HeroRoleRepository()
  }

  async addRole(dto: { heroId: string; name: string }) {
    const existing = await this.heroRoleRepository.findByHero(dto.heroId)
    if (existing.some((r) => r.name.toLowerCase() === dto.name.toLowerCase())) {
      throw new Error('Role already exists for this hero')
    }

    return this.heroRoleRepository.create(dto)
  }

  async updateRole(id: string, dto: { name: string }) {
    return this.heroRoleRepository.update(id, dto)
  }

  async removeRole(id: string) {
    return this.heroRoleRepository.delete(id)
  }

  async listRoles(heroId: string) {
    return this.heroRoleRepository.findByHero(heroId)
  }
}
