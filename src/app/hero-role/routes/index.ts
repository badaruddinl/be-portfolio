import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import {
  createHeroRoleController,
  listHeroRolesController,
  updateHeroRoleController,
  deleteHeroRoleController,
} from '../controllers'

import {
  createHeroRoleSchema,
  deleteHeroRoleSchema,
  getHeroRolesSchema,
  updateHeroRoleSchema,
} from '../schemas'

export default async function heroRoleRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/hero/roles',
      schema: createHeroRoleSchema,
      handler: createHeroRoleController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/hero/:heroId/roles',
      schema: getHeroRolesSchema,
      handler: listHeroRolesController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/hero/roles/:id',
      schema: updateHeroRoleSchema,
      handler: updateHeroRoleController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'DELETE',
      url: '/hero/roles/:id',
      schema: deleteHeroRoleSchema,
      handler: deleteHeroRoleController,
    }),
  )
}
