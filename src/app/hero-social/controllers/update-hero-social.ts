import { FastifyRequest, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroSocialService } from '../services/hero-social'
import { UpdateHeroSocialDto } from '../dto/hero-social'

export default async function updateHeroSocialController(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateHeroSocialDto }>,
  reply: FastifyReply,
) {
  const service = new HeroSocialService()

  const result = await service.update(request.params.id, request.body)

  return Interceptor(reply, StatusCodes.OK, true, 'hero social updated successfully', result)
}
