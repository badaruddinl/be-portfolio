import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { SocialTypeService } from '../services/social-type'

export async function getSocialTypesController(request: FastifyRequest, reply: FastifyReply) {
  const service = new SocialTypeService()
  const result = await service.getAll()

  return Interceptor(reply, StatusCodes.OK, true, 'get social types success', result)
}
