import { FastifyRequest, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroSocialService } from '../services/hero-social'
import { CreateHeroSocialDto } from '../dto/hero-social'

export default async function createHeroSocialController(
  request: FastifyRequest<{ Body: CreateHeroSocialDto }>,
  reply: FastifyReply,
) {
  const service = new HeroSocialService()

  const result = await service.create(request.body)

  return Interceptor(reply, StatusCodes.CREATED, true, 'hero social created successfully', result)
}
