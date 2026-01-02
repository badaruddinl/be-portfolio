import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { ProjectFeature } from './project-feature.schema'
import { ProjectTech } from './project-tech.schema'
import { ProjectCollaborator } from './project-collab.schema'

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 255 })
  title!: string

  @Column({ type: 'varchar', length: 255 })
  tag!: string

  @Column({ type: 'boolean', default: false })
  selected_work!: boolean

  @Column({ type: 'varchar', length: 10 })
  year!: string

  @Column('text')
  overview!: string

  @Column('text')
  challenge!: string

  @Column('text')
  solution!: string

  @Column('text')
  desc!: string

  @Column('simple-array', { nullable: true })
  images!: string[] | null

  @Column({ type: 'text', nullable: true })
  live_url!: string | null

  @Column({ type: 'text', nullable: true })
  source_url!: string | null

  @OneToMany(() => ProjectFeature, (f) => f.project)
  features!: ProjectFeature[]

  @OneToMany(() => ProjectTech, (t) => t.project)
  techs!: ProjectTech[]

  @OneToMany(() => ProjectCollaborator, (c) => c.project)
  collaborators!: ProjectCollaborator[]
}
