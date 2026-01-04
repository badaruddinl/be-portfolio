import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { TechStackService } from '../services/tech-stack'

export default async function getTechStackController(req: FastifyRequest, reply: FastifyReply) {
  const service = new TechStackService()
  const result = await service.getTechStacks()
  return Interceptor(reply, StatusCodes.OK, true, 'tech stacks loaded', result)
}
