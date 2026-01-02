import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Hero } from './hero.schema'

@Entity()
export class HeroRole {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @ManyToOne(() => Hero, (hero) => hero.roles)
  hero!: Hero
}
