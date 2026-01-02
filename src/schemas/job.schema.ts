import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'date' })
  start_date!: string

  @Column({ type: 'date', nullable: true })
  end_date!: string | null

  @Column({ type: 'varchar', length: 100 })
  role!: string

  @Column({ type: 'varchar', length: 100 })
  company!: string

  @Column({ type: 'varchar', length: 255 })
  url!: string

  @Column('text')
  desc!: string

  @Column('simple-array')
  point_desc!: string[]

  @Column('simple-array')
  stack!: string[]
}
