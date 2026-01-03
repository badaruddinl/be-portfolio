import { FastifyRequest, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroRoleService } from '../services/hero-role'
import { CreateHeroRoleDto } from '../dto/hero-role'

export default async function createHeroRoleController(
  request: FastifyRequest<{ Body: CreateHeroRoleDto }>,
  reply: FastifyReply,
) {
  const service = new HeroRoleService()

  const result = await service.addRole(request.body)

  return Interceptor(reply, StatusCodes.CREATED, true, 'role created successfully', result)
}
