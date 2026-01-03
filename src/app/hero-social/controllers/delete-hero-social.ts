import { FastifyRequest, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroSocialService } from '../services/hero-social'

export default async function deleteHeroSocialController(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const service = new HeroSocialService()

  await service.delete(request.params.id)

  return Interceptor(reply, StatusCodes.OK, true, 'hero social deleted successfully')
}
