import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateSocialTypeSchema = schemaBuilder(
  { moduleFunction: 'Update Social Type', moduleDescription: 'update existing social type' },
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
          label: { type: 'string' },
          icon: { type: 'string', nullable: true },
          baseUrl: { type: 'string', nullable: true },
          isActive: { type: 'boolean' },
        },
      },
    },
  },
)
