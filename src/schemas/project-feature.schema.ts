import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Project } from './project.schema'

@Entity()
export class ProjectFeature {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Project, (p) => p.features, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project!: Project

  @Column('text')
  description!: string
}
