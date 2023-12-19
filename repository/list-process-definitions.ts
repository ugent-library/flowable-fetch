import type { Flowable } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listProcessDefinitions(
  params?: FlowableFetchParams
): Promise<Flowable.ListResponse<Flowable.ProcessDefinition>> {
  return await flowableFetch<Flowable.ListResponse<Flowable.ProcessDefinition>>(
    'repository/process-definitions',
    { params }
  )
}
