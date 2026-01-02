import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Project } from './project.schema'

@Entity()
export class ProjectCollaborator {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Project, (p) => p.collaborators, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project!: Project

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 100 })
  role!: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  url!: string | null
}
