import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm'
import { TechStack } from './tech-stack.schema'

@Entity()
@Unique(['tech', 'version'])
export class TechStackVersion {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => TechStack, (tech) => tech.versions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tech_id' })
  tech!: TechStack

  @Column({ type: 'boolean', default: false })
  is_active!: boolean

  @Column({ type: 'varchar', length: 50 })
  version!: string

  @Column({ type: 'varchar', nullable: true })
  release_date!: string | null

  @Column({ type: 'varchar', nullable: true })
  notes!: string | null
}
