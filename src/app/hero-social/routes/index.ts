import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import {
  createHeroSocialController,
  getHeroSocialsController,
  updateHeroSocialController,
  deleteHeroSocialController,
} from '../controllers'
import {
  createHeroSocialSchema,
  deleteHeroSocialSchema,
  getHeroSocialsSchema,
  updateHeroSocialSchema,
} from '../schemas'

export default async function heroSocialRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/hero/:heroId/socials',
      schema: getHeroSocialsSchema,
      handler: getHeroSocialsController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/hero/socials',
      schema: createHeroSocialSchema,
      handler: createHeroSocialController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/hero/socials/:id',
      schema: updateHeroSocialSchema,
      handler: updateHeroSocialController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'DELETE',
      url: '/hero/socials/:id',
      schema: deleteHeroSocialSchema,
      handler: deleteHeroSocialController,
    }),
  )
}
