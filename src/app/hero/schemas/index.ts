import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawCreateHeroSchema } from './create'
import { rawUpdateHeroSchema } from './update'
import { rawGetHeroSchema } from './get'

const module = 'Hero'

export const createHeroSchema = schemaBuilderModule(module, rawCreateHeroSchema)
export const updateHeroSchema = schemaBuilderModule(module, rawUpdateHeroSchema)
export const getHeroSchema = schemaBuilderModule(module, rawGetHeroSchema)
