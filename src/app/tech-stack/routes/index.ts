import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import {
  createTechStackSchema,
  getTechStackSchema,
  updateTechStackSchema,
  addVersionSchema,
} from './../schemas'
import {
  createTechStackController,
  getTechStackController,
  updateTechStackController,
  addVersionController,
} from './../controllers'

export default async function techStackRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/tech-stacks',
      schema: getTechStackSchema,
      handler: getTechStackController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/tech-stacks',
      schema: createTechStackSchema,
      handler: createTechStackController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/tech-stacks/:id',
      schema: updateTechStackSchema,
      handler: updateTechStackController,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/tech-stacks/:id/versions',
      schema: addVersionSchema,
      handler: addVersionController,
    }),
  )
}
