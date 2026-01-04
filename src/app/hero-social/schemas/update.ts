import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateHeroSocialSchema = schemaBuilder(
  { moduleFunction: 'Update Hero Social', moduleDescription: 'update hero social link' },
  {
    request: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
      body: {
        type: 'object',
        properties: {
          socialTypeId: { type: 'string' },
          url: { type: 'string', format: 'uri' },
        },
      },
    },
  },
)
