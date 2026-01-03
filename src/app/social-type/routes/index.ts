import { FastifyInstance } from 'fastify'
import { routeHelper } from '@/helpers'
import {
  getSocialTypesController,
  createSocialTypeController,
  updateSocialTypeController,
  deleteSocialTypeController,
} from '../controllers'

import {
  createSocialTypeSchema,
  deleteSocialTypeSchema,
  getSocialTypesSchema,
  updateSocialTypeSchema,
} from '../schemas'

export default async function socialTypeRoutes(fastify: FastifyInstance) {
  fastify.route(
    routeHelper({
      method: 'GET',
      url: '/social-types',
      schema: getSocialTypesSchema,
      handler: getSocialTypesController,
      auth: false,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'POST',
      url: '/social-types',
      schema: createSocialTypeSchema,
      handler: createSocialTypeController,
      auth: false,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'PUT',
      url: '/social-types/:id',
      schema: updateSocialTypeSchema,
      handler: updateSocialTypeController,
      auth: false,
    }),
  )

  fastify.route(
    routeHelper({
      method: 'DELETE',
      url: '/social-types/:id',
      schema: deleteSocialTypeSchema,
      handler: deleteSocialTypeController,
      auth: false,
    }),
  )
}
