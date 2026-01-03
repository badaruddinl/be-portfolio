import Interceptor from '@/utils/responseInterceptor.util'
import { SocialTypeService } from '../services/social-type'
import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateSocialTypeDto } from '../dto/social-type'
import { StatusCodes } from 'http-status-codes'

export async function updateSocialTypeController(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateSocialTypeDto }>,
  reply: FastifyReply,
) {
  const service = new SocialTypeService()

  const result = await service.update(request.params.id, request.body)

  return Interceptor(reply, StatusCodes.OK, true, 'social type updated', result)
}
