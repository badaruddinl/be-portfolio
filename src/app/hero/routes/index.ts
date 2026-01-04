import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import { createHeroSchema, getHeroSchema, updateHeroSchema } from '../schemas'
import { createHeroController, getHeroController, updateHeroController } from '../controllers'

export default async function heroRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/hero',
      schema: getHeroSchema,
      handler: getHeroController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/hero',
      schema: createHeroSchema,
      handler: createHeroController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/hero/:id',
      schema: updateHeroSchema,
      handler: updateHeroController,
    }),
  )
}
