import { FastifyReply, FastifyRequest } from 'fastify'
import { SocialTypeService } from '../services/social-type'
import Interceptor from '@/utils/responseInterceptor.util'
import { StatusCodes } from 'http-status-codes'

export async function deleteSocialTypeController(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply,
) {
  const service = new SocialTypeService()

  await service.delete(request.params.id)

  return Interceptor(reply, StatusCodes.NO_CONTENT, true, 'deleted', null)
}
