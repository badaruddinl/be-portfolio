export interface CreateProjectCollaboratorDto {
  name: string
  role: string
  url?: string | null
}

export interface CreateProjectDto {
  title: string
  tag: string
  selected_work?: boolean
  is_active?: boolean
  year: string
  overview: string
  challenge: string
  solution: string
  desc: string
  images?: string[] | null
  live_url?: string | null
  source_url?: string | null

  // Relasi Input
  features: string[] // Array deskripsi fitur
  collaborators: CreateProjectCollaboratorDto[]
  tech_stack_ids: string[] // Array UUID dari TechStack yang sudah ada
}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}
