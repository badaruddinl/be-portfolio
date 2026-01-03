import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawCreateSocialTypeSchema } from './create'
import { rawUpdateSocialTypeSchema } from './update'
import { rawGetSocialTypesSchema } from './getlist'
import { rawDeleteSocialTypeSchema } from './delete'

const module = 'Social Type'

export const createSocialTypeSchema = schemaBuilderModule(module, rawCreateSocialTypeSchema)
export const updateSocialTypeSchema = schemaBuilderModule(module, rawUpdateSocialTypeSchema)
export const getSocialTypesSchema = schemaBuilderModule(module, rawGetSocialTypesSchema)
export const deleteSocialTypeSchema = schemaBuilderModule(module, rawDeleteSocialTypeSchema)
