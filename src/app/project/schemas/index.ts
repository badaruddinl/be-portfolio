import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawCreateProjectSchema } from './create'
import { rawUpdateProjectSchema } from './update'
import { rawGetProjectSchema } from './get'

const module = 'Project'

export const createProjectSchema = schemaBuilderModule(module, rawCreateProjectSchema)
export const updateProjectSchema = schemaBuilderModule(module, rawUpdateProjectSchema)
export const getProjectSchema = schemaBuilderModule(module, rawGetProjectSchema)
