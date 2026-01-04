import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateHeroRoleSchema = schemaBuilder(
  { moduleFunction: 'Update Hero Role', moduleDescription: 'update an existing hero role' },
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
        required: ['name'],
        properties: {
          name: { type: 'string', minLength: 2 },
        },
      },
    },
  },
)
