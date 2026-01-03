import { rawCreateHeroRoleSchema } from '@/app/hero-role/schemas/create'
import { rawUpdateHeroRoleSchema } from '@/app/hero-role/schemas/update'
import { schemaBuilderModule } from '@/utils/schemaBuilder.util'
import { rawGetHeroRolesSchema } from './getlist'
import { rawDeleteHeroRolesSchema } from './delete'

const module = 'Hero Role'
export const createHeroRoleSchema = schemaBuilderModule(module, rawCreateHeroRoleSchema)
export const getHeroRolesSchema = schemaBuilderModule(module, rawGetHeroRolesSchema)
export const updateHeroRoleSchema = schemaBuilderModule(module, rawUpdateHeroRoleSchema)
export const deleteHeroRoleSchema = schemaBuilderModule(module, rawDeleteHeroRolesSchema)
