import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { CreateProjectDto } from '../dto/project'
import { ProjectService } from '../services/project'

export default async function createProjectController(
  request: FastifyRequest<{ Body: CreateProjectDto }>,
  reply: FastifyReply,
) {
  const service = new ProjectService()
  const result = await service.createProject(request.body)
  return Interceptor(reply, StatusCodes.CREATED, true, 'project created', result)
}
