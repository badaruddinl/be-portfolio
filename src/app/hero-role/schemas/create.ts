import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateHeroRoleSchema = schemaBuilder(
  { moduleFunction: 'Create Hero Role', moduleDescription: 'create a new hero role' },
  {
    request: {
      body: {
        type: 'object',
        required: ['heroId', 'name'],
        properties: {
          heroId: { type: 'string' },
          name: { type: 'string', minLength: 2 },
        },
      },
    },
  },
)
