import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'

import { JobService } from '../services/job'

export default async function getJobController(req: FastifyRequest, reply: FastifyReply) {
  const service = new JobService()
  const result = await service.getJobs()

  return Interceptor(reply, StatusCodes.OK, true, 'jobs loaded', result)
}
