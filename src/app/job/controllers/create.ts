import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'

import { CreateJobDto } from '../dto/job'
import { JobService } from '../services/job'

export default async function createJobController(
  request: FastifyRequest<{ Body: CreateJobDto }>,
  reply: FastifyReply,
) {
  const service = new JobService()
  const result = await service.createJob(request.body)

  return Interceptor(reply, StatusCodes.CREATED, true, 'job created successfully', result)
}
