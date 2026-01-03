import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'

import { UpdateHeroDto } from '../dto/hero'
import { HeroService } from '../services/hero'

export default async function updateHeroController(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateHeroDto }>,
  reply: FastifyReply,
) {
  const service = new HeroService()
  const result = await service.updateHero(request.params.id, request.body)

  return Interceptor(reply, StatusCodes.OK, true, 'hero updated', result)
}
