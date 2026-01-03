import { schemaBuilderModule } from '@/utils/schemaBuilder.util'

import { rawCreateHeroSocialSchema } from './create'
import { rawUpdateHeroSocialSchema } from './update'
import { rawGetHeroSocialsSchema } from './getlist'
import { rawDeleteHeroSocialSchema } from './delete'

const module = 'Hero Social'

export const createHeroSocialSchema = schemaBuilderModule(module, rawCreateHeroSocialSchema)
export const updateHeroSocialSchema = schemaBuilderModule(module, rawUpdateHeroSocialSchema)
export const getHeroSocialsSchema = schemaBuilderModule(module, rawGetHeroSocialsSchema)
export const deleteHeroSocialSchema = schemaBuilderModule(module, rawDeleteHeroSocialSchema)
