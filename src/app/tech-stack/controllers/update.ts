import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { UpdateTechStackDto } from '../dto/tech-stack'
import { TechStackService } from '../services/tech-stack'

export default async function updateTechStackController(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateTechStackDto }>,
  reply: FastifyReply,
) {
  const service = new TechStackService()
  const result = await service.updateTechStack(request.params.id, request.body)
  return Interceptor(reply, StatusCodes.OK, true, 'tech stack updated', result)
}
