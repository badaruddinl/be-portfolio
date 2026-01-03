import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Hero } from './hero.schema'

@Entity()
export class HeroRole {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @ManyToOne(() => Hero, (hero) => hero.roles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hero_id' })
  hero!: Hero
}
