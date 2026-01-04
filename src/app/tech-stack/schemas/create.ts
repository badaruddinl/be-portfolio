import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateTechStackSchema = schemaBuilder(
  { moduleFunction: 'Create TechStack', moduleDescription: 'create new technology stack' },
  {
    request: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
          icon: { type: 'string', nullable: true },
          initial_version: {
            type: 'object',
            properties: {
              version: { type: 'string' },
              release_date: { type: 'string', nullable: true },
              notes: { type: 'string', nullable: true },
              is_active: { type: 'boolean' },
            },
            required: ['version'],
            nullable: true,
          },
        },
      },
    },
  },
)
