import { FastifyRequest, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroRoleService } from '../services/hero-role'

export default async function listHeroRolesController(
  request: FastifyRequest<{ Params: { heroId: string } }>,
  reply: FastifyReply,
) {
  const { heroId } = request.params
  const service = new HeroRoleService()

  const result = await service.listRoles(heroId)

  return Interceptor(reply, StatusCodes.OK, true, 'get hero roles successfully', result)
}
