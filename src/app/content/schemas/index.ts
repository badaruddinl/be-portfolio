import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawGetHomeContentSchema } from './home'

const moduleName = 'Content'

export const getHomeContentSchema = schemaBuilderModule(moduleName, rawGetHomeContentSchema)
