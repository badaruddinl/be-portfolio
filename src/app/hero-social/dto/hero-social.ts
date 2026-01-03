export class CreateHeroSocialDto {
  heroId!: string
  socialTypeId!: string
  url!: string
}

export class UpdateHeroSocialDto {
  socialTypeId?: string
  url?: string
}
