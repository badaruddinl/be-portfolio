export interface CreateHeroDto {
  name: string
  description: string
  profile_image: string
  avail_hire?: boolean
  based: string
  cv_link?: string | null

  roles: {
    name: string
  }[]

  socials: {
    typeId: string
    url: string
  }[]
}

export interface UpdateHeroDto extends Partial<CreateHeroDto> {}
