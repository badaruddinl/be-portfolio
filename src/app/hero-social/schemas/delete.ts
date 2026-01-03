import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawDeleteHeroSocialSchema = schemaBuilder(
  { moduleFunction: 'Delete Hero Social', moduleDescription: 'delete hero social by id' },
  {
    request: {
      security: [],
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
    },
  },
)
