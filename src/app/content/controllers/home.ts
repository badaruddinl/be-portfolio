import { FastifyReply, FastifyRequest } from 'fastify'
import { ContentService } from '../services/home'
import Interceptor from '@/utils/responseInterceptor.util'
import { StatusCodes } from 'http-status-codes'

export default async function homeContentController(request: FastifyRequest, reply: FastifyReply) {
  const contentService = new ContentService()

  const result = await contentService.getHomeContent()

  return Interceptor(reply, StatusCodes.OK, true, 'get home content successfully', result)
}
