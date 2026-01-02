import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { HeroSocial } from './hero-social.schema'

@Entity()
export class Hero {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'text' })
  name!: string

  @Column({ type: 'text' })
  description!: string

  @Column({ type: 'varchar', length: 255 })
  profile_image!: string

  @Column({ type: 'varchar', length: 255, default: false })
  avail_hire!: boolean

  @Column({ type: 'varchar', length: 255 })
  based!: string

  @OneToMany(() => HeroSocial, (s) => s.hero)
  socials!: HeroSocial[]

  @Column('simple-array')
  roles!: string[]

  @Column({ type: 'varchar', nullable: true })
  cv_link!: string | null
}
