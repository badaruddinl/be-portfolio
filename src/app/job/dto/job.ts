export interface CreateJobDto {
  start_date: string
  end_date?: string | null
  role: string
  company: string
  url: string
  desc: string
  point_desc: string[]
  stack: string[]
}

export interface UpdateJobDto {
  start_date?: string
  end_date?: string | null
  role?: string
  company?: string
  url?: string
  desc?: string
  point_desc?: string[]
  stack?: string[]
}
