import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Project } from './project.schema'

@Entity()
export class ProjectImage {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 255 })
  url!: string

  @ManyToOne(() => Project, (p) => p.images)
  project!: Project
}
