import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawAddVersionSchema = schemaBuilder(
  { moduleFunction: 'Add Version', moduleDescription: 'add version to existing tech stack' },
  {
    request: {
      params: {
        type: 'object',
        properties: { id: { type: 'string' } }, // ID dari TechStack Parent
        required: ['id'],
      },
      body: {
        type: 'object',
        required: ['version'],
        properties: {
          version: { type: 'string' },
          release_date: { type: 'string', nullable: true },
          notes: { type: 'string', nullable: true },
          is_active: { type: 'boolean' },
        },
      },
    },
  },
)
