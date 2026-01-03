import { FastifyInstance } from 'fastify/fastify'
import { routeHelper } from '@/helpers'
import { homeContentController } from '../controllers'
import { homeSchema } from '../schemas'

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/',
      schema: homeSchema,
      handler: homeContentController,
      auth: false,
    }),
  )
}
