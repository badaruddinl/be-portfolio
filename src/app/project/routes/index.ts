import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import { createProjectSchema, getProjectSchema, updateProjectSchema } from './../schemas'
import {
  createProjectController,
  getProjectController,
  updateProjectController,
} from './../controllers'

export default async function projectRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/projects',
      schema: getProjectSchema,
      handler: getProjectController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/projects',
      schema: createProjectSchema,
      handler: createProjectController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/projects/:id',
      schema: updateProjectSchema,
      handler: updateProjectController,
    }),
  )
}
