import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateProjectSchema = schemaBuilder(
  { moduleFunction: 'Update Project', moduleDescription: 'update project details' },
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
          title: { type: 'string' },
          tag: { type: 'string' },
          selected_work: { type: 'boolean' },
          is_active: { type: 'boolean' },
          year: { type: 'string' },
          overview: { type: 'string' },
          challenge: { type: 'string' },
          solution: { type: 'string' },
          desc: { type: 'string' },
          images: { type: 'array', items: { type: 'string' }, nullable: true },
          live_url: { type: 'string', nullable: true },
          source_url: { type: 'string', nullable: true },
          features: { type: 'array', items: { type: 'string' } },
          tech_stack_ids: { type: 'array', items: { type: 'string' } },
          collaborators: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                role: { type: 'string' },
                url: { type: 'string', nullable: true },
              },
            },
          },
        },
      },
    },
  },
)
