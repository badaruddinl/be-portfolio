import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import { getHomeContentSchema } from './../schemas'
import { getHomeContentController } from './../controllers'

export default async function contentRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/home',
      schema: getHomeContentSchema,
      handler: getHomeContentController,
      auth: false,
    }),
  )
}
