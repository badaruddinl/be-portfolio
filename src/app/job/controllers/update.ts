import { FastifyReply, FastifyRequest } from 'fastify'
import { StatusCodes } from 'http-status-codes'
import Interceptor from '@/utils/responseInterceptor.util'

import { UpdateJobDto } from '../dto/job'
import { JobService } from '../services/job'

export default async function updateJobController(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateJobDto }>,
  reply: FastifyReply,
) {
  const service = new JobService()
  const result = await service.updateJob(request.params.id, request.body)

  return Interceptor(reply, StatusCodes.OK, true, 'job updated', result)
}
