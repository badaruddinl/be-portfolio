import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { HeroSocial } from './hero-social.schema'
import { HeroRole } from './hero-role.schema'

@Entity()
export class Hero {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column('text')
  name!: string

  @Column('text')
  description!: string

  @Column({ type: 'varchar', length: 255 })
  profile_image!: string

  @Column({ type: 'boolean', default: false })
  avail_hire!: boolean

  @Column({ type: 'varchar', length: 255 })
  based!: string

  @OneToMany(() => HeroSocial, (s) => s.hero)
  socials!: HeroSocial[]

  @OneToMany(() => HeroRole, (r) => r.hero, { cascade: true })
  roles!: HeroRole[]

  @Column({ type: 'varchar', nullable: true })
  cv_link!: string | null
}
