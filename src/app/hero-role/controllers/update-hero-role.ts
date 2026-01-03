import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroRoleService } from '../services/hero-role'

export default async function updateHeroRoleController(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const { id } = request.params
  const service = new HeroRoleService()

  const result = await service.updateRole(id, request.body as any)

  return Interceptor(reply, StatusCodes.OK, true, 'update hero role successfully', result)
}
