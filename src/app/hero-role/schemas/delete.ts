import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawDeleteHeroRolesSchema = schemaBuilder(
  { moduleFunction: 'Delete Hero Roles', moduleDescription: 'delete hero roles by role id' },
  {
    request: {
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
