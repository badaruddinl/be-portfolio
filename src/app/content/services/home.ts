

export class ContentService {
  constructor() {
    private readonly heroRepo,
    private readonly socialRepo,
    private readonly techRepo,
    private readonly projectRepo,
    private readonly jobRepo,
  }

  async getHomeContent() {
    const hero = await this.heroRepo.getSingleton()
    const socials = await this.socialRepo.findAll()
    const tech = await this.techRepo.findAllWithVersions()
    const projects = await this.projectRepo.findPublished()
    const jobs = await this.jobRepo.findOrdered()

    return {
      hero,
      socials,
      tech,
      projects,
      jobs,
    }
  }
}
