import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { UpdateProjectDto } from '../dto/project'
import { ProjectService } from '../services/project'

export default async function updateProjectController(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateProjectDto }>,
  reply: FastifyReply,
) {
  const service = new ProjectService()
  const result = await service.updateProject(request.params.id, request.body)
  return Interceptor(reply, StatusCodes.OK, true, 'project updated', result)
}
