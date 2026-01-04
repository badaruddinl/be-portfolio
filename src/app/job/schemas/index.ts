import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawCreateJobSchema } from './create'
import { rawUpdateJobSchema } from './update'
import { rawGetJobSchema } from './get'

const module = 'Job'

export const createJobSchema = schemaBuilderModule(module, rawCreateJobSchema)
export const updateJobSchema = schemaBuilderModule(module, rawUpdateJobSchema)
export const getJobSchema = schemaBuilderModule(module, rawGetJobSchema)
