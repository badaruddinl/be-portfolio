import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawCreateTechStackSchema } from './create'
import { rawUpdateTechStackSchema } from './update'
import { rawGetTechStackSchema } from './get'
import { rawAddVersionSchema } from './add-version'

const module = 'TechStack'

export const createTechStackSchema = schemaBuilderModule(module, rawCreateTechStackSchema)
export const updateTechStackSchema = schemaBuilderModule(module, rawUpdateTechStackSchema)
export const getTechStackSchema = schemaBuilderModule(module, rawGetTechStackSchema)
export const addVersionSchema = schemaBuilderModule(module, rawAddVersionSchema)
