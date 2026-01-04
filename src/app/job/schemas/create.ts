import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateJobSchema = schemaBuilder(
  { moduleFunction: 'Create Job', moduleDescription: 'add new work experience' },
  {
    request: {
      body: {
        type: 'object',
        required: ['start_date', 'role', 'company', 'url', 'desc'],
        properties: {
          start_date: { type: 'string', format: 'date' },
          end_date: { type: 'string', format: 'date', nullable: true },
          role: { type: 'string' },
          company: { type: 'string' },
          url: { type: 'string' },
          desc: { type: 'string' },
          point_desc: { type: 'array', items: { type: 'string' } },
          stack: { type: 'array', items: { type: 'string' } },
        },
      },
    },
  },
)
