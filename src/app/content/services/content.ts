import { AppDataSource } from '@/connections/database'
import { Hero, Job, Project, TechStack } from '@/schemas'
import { HomeContentDto } from '../dto/home'

export class ContentService {
  private heroRepo = AppDataSource.getRepository(Hero)
  private projectRepo = AppDataSource.getRepository(Project)
  private jobRepo = AppDataSource.getRepository(Job)
  private techRepo = AppDataSource.getRepository(TechStack)

  async getHomeData(): Promise<HomeContentDto> {
    // 1. Get Hero (Singleton) dengan Socials dan Roles
    const hero = await this.heroRepo.findOne({
      relations: ['roles', 'socials'],
    })

    // 2. Get Featured Projects (Hanya yang selected_work = true & is_active = true)
    // Biasanya di Home cuma nampilin 3-4 project teratas
    const projects = await this.projectRepo.find({
      where: {
        selected_work: true,
        is_active: true,
      },
      relations: ['techs', 'techs.tech'], // Kita butuh tau tech stack-nya apa untuk display icon
      order: { year: 'DESC' },
      take: 4, // Limit 4 project saja untuk home
    })

    // 3. Get Experiences / Jobs
    const jobs = await this.jobRepo.find({
      order: { start_date: 'DESC' },
    })

    // 4. Get Tech Stacks (Hanya parent-nya untuk display marquee/list)
    const stacks = await this.techRepo.find({
      relations: ['versions'], // Opsional, kalau mau nampilin versi
      order: { name: 'ASC' },
    })

    return {
      hero,
      featured_projects: projects,
      experiences: jobs,
      tech_stack: stacks,
    }
  }
}
