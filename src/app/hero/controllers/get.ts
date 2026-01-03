import { FastifyReply, FastifyRequest } from 'fastify'
import Interceptor from '@/utils/responseInterceptor.util'
import { StatusCodes } from 'http-status-codes'
import { HeroService } from '../services/hero'

export default async function getHeroController(req: FastifyRequest, reply: FastifyReply) {
  const service = new HeroService()
  const result = await service.getHero()

  return Interceptor(reply, StatusCodes.OK, true, 'hero loaded', result)
}
