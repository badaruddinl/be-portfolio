import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'
import { ProjectService } from '../services/project'

export default async function getProjectController(req: FastifyRequest, reply: FastifyReply) {
  const service = new ProjectService()
  const result = await service.getProjects()
  return Interceptor(reply, StatusCodes.OK, true, 'projects loaded', result)
}
