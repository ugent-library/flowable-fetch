import type { Flowable } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listProcessInstances(
  params?: FlowableFetchParams
): Promise<Flowable.ListResponse<Flowable.ProcessInstance>> {
  return await flowableFetch<Flowable.ListResponse<Flowable.ProcessInstance>>(
    'runtime/process-instances',
    { params }
  )
}
