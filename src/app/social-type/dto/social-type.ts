export interface CreateSocialTypeDto {
  code: string
  label: string
  icon?: string | null
  baseUrl?: string | null
}

export interface UpdateSocialTypeDto {
  label: string
  icon?: string | null
  baseUrl?: string | null
  isActive?: boolean
}
