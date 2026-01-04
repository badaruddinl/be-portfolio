import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawGetHomeContentSchema = schemaBuilder(
  {
    moduleFunction: 'Get Home Content',
    moduleDescription: 'Aggregate data for Portfolio Home Page',
  },
  {
    request: {
      security: [],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'boolean' },
          message: { type: 'string' },
          data: {
            type: 'object',
            properties: {
              hero: { type: 'object', additionalProperties: true },
              featured_projects: {
                type: 'array',
                items: { type: 'object', additionalProperties: true },
              },
              experiences: { type: 'array', items: { type: 'object', additionalProperties: true } },
              tech_stack: { type: 'array', items: { type: 'object', additionalProperties: true } },
            },
          },
        },
      },
    },
  },
)
