export interface CreateHeroDto {
  name: string
  description: string
  profile_image: string
  based: string
  avail_hire?: boolean
  cv_link?: string | null
}

export interface UpdateHeroDto {
  name?: string
  description?: string
  profile_image?: string
  based?: string
  avail_hire?: boolean
  cv_link?: string | null
}
