import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroRoleService } from '../services/hero-role'

export default async function deleteHeroRoleController(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const { id } = request.params
  const service = new HeroRoleService()

  await service.removeRole(id)

  return Interceptor(reply, StatusCodes.NO_CONTENT, true, 'delete hero role successfully', null)
}
