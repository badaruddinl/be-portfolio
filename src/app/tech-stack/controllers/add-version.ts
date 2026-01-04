import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { CreateTechStackVersionDto } from '../dto/tech-stack'
import { TechStackService } from '../services/tech-stack'

export default async function addVersionController(
  request: FastifyRequest<{ Params: { id: string }; Body: CreateTechStackVersionDto }>,
  reply: FastifyReply,
) {
  const service = new TechStackService()
  const result = await service.addTechStackVersion(request.params.id, request.body)
  return Interceptor(reply, StatusCodes.CREATED, true, 'version added successfully', result)
}
