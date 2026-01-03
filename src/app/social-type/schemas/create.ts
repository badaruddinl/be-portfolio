import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateSocialTypeSchema = schemaBuilder(
  { moduleFunction: 'Create Social Type', moduleDescription: 'create new social type' },
  {
    request: {
      security: [],
      body: {
        type: 'object',
        required: ['code', 'label'],
        properties: {
          code: { type: 'string', minLength: 2 },
          label: { type: 'string', minLength: 2 },
          icon: { type: 'string', nullable: true },
          baseUrl: { type: 'string', nullable: true },
        },
      },
    },
  },
)
