import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawDeleteSocialTypeSchema = schemaBuilder(
  { moduleFunction: 'Delete Social Type', moduleDescription: 'delete social type' },
  {
    request: {
      security: [],
      params: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id'],
      },
    },
  },
)
