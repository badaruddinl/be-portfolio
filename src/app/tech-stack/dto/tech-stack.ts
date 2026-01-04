// DTO untuk versi (Child)
export interface CreateTechStackVersionDto {
  version: string
  release_date?: string | null
  notes?: string | null
  is_active?: boolean
}

// DTO untuk Tech Stack (Parent)
export interface CreateTechStackDto {
  name: string
  icon?: string | null
  // Opsional: Langsung tambah versi awal saat create parent
  initial_version?: CreateTechStackVersionDto
}

export interface UpdateTechStackDto {
  name?: string
  icon?: string | null
}
