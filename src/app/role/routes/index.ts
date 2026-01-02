import { FastifyInstance } from 'fastify/fastify'
import { createRoleSchema } from '../schemas'
import { createRoleController } from '../controllers'
import { routeHelper } from '@/helpers'


export default async function roleRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/create',
      schema: createRoleSchema,
      handler: createRoleController,
    }),
  )
}
