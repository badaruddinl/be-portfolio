import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateHeroRoleSchema = schemaBuilder(
  { moduleFunction: 'Update Hero Role', moduleDescription: 'update an existing hero role' },
  {
    request: {
      security: [],
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
