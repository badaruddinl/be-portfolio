import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawHomeSchema } from './home'

const module = 'Public'
export const homeSchema = schemaBuilderModule(module, rawHomeSchema)
