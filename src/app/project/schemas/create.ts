import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateProjectSchema = schemaBuilder(
  { moduleFunction: 'Create Project', moduleDescription: 'create portfolio project' },
  {
    request: {
      body: {
        type: 'object',
        required: [
          'title',
          'tag',
          'year',
          'overview',
          'challenge',
          'solution',
          'desc',
          'features',
          'tech_stack_ids',
        ],
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
              required: ['name', 'role'],
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
