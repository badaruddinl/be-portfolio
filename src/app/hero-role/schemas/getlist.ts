import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawGetHeroRolesSchema = schemaBuilder(
  { moduleFunction: 'Get Hero Roles', moduleDescription: 'get hero roles by hero id' },
  {
    request: {
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
