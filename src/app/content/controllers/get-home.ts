import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { ContentService } from '../services/content'

export default async function getHomeContentController(req: FastifyRequest, reply: FastifyReply) {
  const service = new ContentService()
  const result = await service.getHomeData()

  return Interceptor(reply, StatusCodes.OK, true, 'Home content loaded successfully', result)
}
