import { FastifyInstance } from 'fastify/fastify'
import { loginController, registerController } from '../controllers'
import { loginSchema, registerSchema } from '../schemas'
import { routeHelper } from '@/helpers'

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/login',
      schema: loginSchema,
      handler: loginController,
      auth: false,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/register',
      schema: registerSchema,
      handler: registerController,
      auth: false,
    }),
  )
}
