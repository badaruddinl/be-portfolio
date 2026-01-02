import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { TechStackVersion } from './tech-stack-version.schema'

@Entity()
export class TechStack {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', unique: true })
  name!: string

  @Column({ type: 'varchar', nullable: true })
  icon!: string | null

  @OneToMany(() => TechStackVersion, (v) => v.tech)
  versions!: TechStackVersion[]
}
