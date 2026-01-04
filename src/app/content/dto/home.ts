import { Hero, Job, Project, TechStack } from '@/schemas'

export interface HomeContentDto {
  hero: Hero | null
  featured_projects: Project[]
  experiences: Job[]
  tech_stack: TechStack[]
}
