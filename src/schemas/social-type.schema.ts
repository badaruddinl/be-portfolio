import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class SocialType {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  code!: string

  @Column({ type: 'varchar', length: 100 })
  label!: string

  @Column({ type: 'boolean', default: false })
  is_active!: boolean

  @Column({ type: 'varchar', length: 100, nullable: true })
  icon!: string | null

  @Column({ type: 'varchar', length: 255, nullable: true })
  base_url!: string | null
}
