import { rawCreateHeroRoleSchema } from '@/app/hero-role/schemas/create'
import { rawUpdateHeroRoleSchema } from '@/app/hero-role/schemas/update'
import { schemaBuilderModule } from '@/utils/schemaBuilder.util'

const module = 'Hero Role'
export const createHeroRoleSchema = schemaBuilderModule(module, rawCreateHeroRoleSchema)
export const updateHeroRoleSchema = schemaBuilderModule(module, rawUpdateHeroRoleSchema)
