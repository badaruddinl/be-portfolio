import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateJobSchema = schemaBuilder(
  { moduleFunction: 'Update Job', moduleDescription: 'update work experience' },
  {
    request: {
      params: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id'],
      },
      body: {
        type: 'object',
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
