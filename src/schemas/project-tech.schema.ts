import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Project } from './project.schema'
import { TechStack } from './tech-stack.schema'

@Entity()
export class ProjectTech {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Project, (p) => p.techs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project!: Project

  @ManyToOne(() => TechStack, { eager: true })
  @JoinColumn({ name: 'tech_id' })
  tech!: TechStack
}
