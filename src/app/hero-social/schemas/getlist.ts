import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawGetHeroSocialsSchema = schemaBuilder(
  { moduleFunction: 'Get Hero Socials', moduleDescription: 'get hero socials by hero id' },
  {
    request: {
      security: [],
      params: {
        type: 'object',
        properties: {
          heroId: { type: 'string' },
        },
        required: ['heroId'],
      },
    },
  },
)
