import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'

import { CreateHeroDto } from '../dto/hero'
import { HeroService } from '../services/hero'
import Interceptor from '@/utils/responseInterceptor.util'

export default async function createHeroController(
  request: FastifyRequest<{ Body: CreateHeroDto }>,
  reply: FastifyReply,
) {
  const service = new HeroService()
  const result = await service.createHero(request.body)

  return Interceptor(reply, StatusCodes.CREATED, true, 'hero created successfully', result)
}
