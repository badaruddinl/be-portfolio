import { schemaBuilder } from '@/utils/schemaBuilder.util'

export const rawHomeSchema = schemaBuilder(
  { moduleFunction: 'Home', moduleDescription: 'Home page content' },
  {
    request: {
      security: [],
    },
  },
)
