import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm'
import { Hero } from './hero.schema'
import { SocialType } from './social-type.schema'

@Entity()
export class HeroSocial {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(() => Hero, (hero) => hero.socials, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hero_id' })
  hero!: Hero

  @ManyToOne(() => SocialType, { eager: true })
  @JoinColumn({ name: 'social_type_id' })
  type!: SocialType

  @Column({ type: 'varchar', length: 255 })
  url!: string
}
