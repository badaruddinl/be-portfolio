import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateHeroSocialSchema = schemaBuilder(
  { moduleFunction: 'Create Hero Social', moduleDescription: 'create a new hero social link' },
  {
    request: {
      security: [],
      body: {
        type: 'object',
        required: ['heroId', 'socialTypeId', 'url'],
        properties: {
          heroId: { type: 'string' },
          socialTypeId: { type: 'string' },
          url: { type: 'string', format: 'uri' },
        },
      },
    },
  },
)
