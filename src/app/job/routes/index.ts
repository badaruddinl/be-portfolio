import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import { createJobSchema, getJobSchema, updateJobSchema } from './../schemas'
import { createJobController, getJobController, updateJobController } from './../controllers'

export default async function jobRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/jobs',
      schema: getJobSchema,
      handler: getJobController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/jobs',
      schema: createJobSchema,
      handler: createJobController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/jobs/:id',
      schema: updateJobSchema,
      handler: updateJobController,
    }),
  )
}
