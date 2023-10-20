import type { ListResponse, ProcessInstance } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listProcessInstances(
  params?: FlowableFetchParams
): Promise<ListResponse<ProcessInstance>> {
  return await flowableFetch<ListResponse<ProcessInstance>>(
    'runtime/process-instances',
    { params }
  )
}