import { FastifyRequest, FastifyReply } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { HeroSocialService } from '../services/hero-social'

export default async function getHeroSocialsController(
  request: FastifyRequest<{ Params: { heroId: string } }>,
  reply: FastifyReply,
) {
  const service = new HeroSocialService()

  const result = await service.getByHero(request.params.heroId)

  return Interceptor(reply, StatusCodes.OK, true, 'hero socials fetched successfully', result)
}
