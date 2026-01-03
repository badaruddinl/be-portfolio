import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { SocialTypeService } from '../services/social-type'
import { CreateSocialTypeDto } from '../dto/social-type'

export async function createSocialTypeController(
  request: FastifyRequest<{ Body: CreateSocialTypeDto }>,
  reply: FastifyReply,
) {
  const service = new SocialTypeService()
  const result = await service.create(request.body)

  return Interceptor(reply, StatusCodes.CREATED, true, 'social type created', result)
}
