import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawUpdateHeroSchema = schemaBuilder(
  { moduleFunction: 'Update Hero', moduleDescription: 'update hero profile' },
  {
    request: {
      security: [],
      params: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id'],
      },
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          profile_image: { type: 'string' },
          based: { type: 'string' },
          avail_hire: { type: 'boolean' },
          cv_link: { type: 'string', nullable: true },
        },
      },
    },
  },
)
