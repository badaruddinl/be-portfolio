import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateTechStackSchema = schemaBuilder(
  { moduleFunction: 'Update TechStack', moduleDescription: 'update tech stack info' },
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
          name: { type: 'string' },
          icon: { type: 'string', nullable: true },
        },
      },
    },
  },
)
