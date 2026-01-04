import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawCreateHeroSchema = schemaBuilder(
  { moduleFunction: 'Create Hero', moduleDescription: 'create portfolio hero' },
  {
    request: {
      body: {
        type: 'object',
        required: ['name', 'description', 'profile_image', 'based'],
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
