import { FastifyInstance } from 'fastify'
import authRoutes from './auth/routes'
import roleRoutes from './role/routes'
import usersRoutes from './users/routes'
import heroRoutes from './hero/routes'
import heroRoleRoutes from './hero-role/routes'
import heroSocialRoutes from './hero-social/routes'
import jobRoutes from './job/routes'
import projectRoutes from './project/routes'
import techStackRoutes from './tech-stack/routes'
import socialTypeRoutes from './social-type/routes'
import contentRoutes from './content/routes'

export default async (fastify: FastifyInstance) => {
  fastify.register(authRoutes, { prefix: '/auth' })
  fastify.register(roleRoutes, { prefix: '/roles' })
  fastify.register(usersRoutes, { prefix: '/users' })
  fastify.register(heroRoutes, { prefix: '/heros' })
  fastify.register(heroRoleRoutes, { prefix: '/hero-roles' })
  fastify.register(heroSocialRoutes, { prefix: '/hero-socials' })
  fastify.register(jobRoutes, { prefix: '/jobs' })
  fastify.register(projectRoutes, { prefix: '/projects' })
  fastify.register(techStackRoutes, { prefix: '/tech-stacks' })
  fastify.register(socialTypeRoutes, { prefix: '/social-types' })
  fastify.register(contentRoutes, { prefix: '/v1/content' })
}
