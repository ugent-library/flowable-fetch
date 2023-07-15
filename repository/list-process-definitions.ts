import type { ListResponse, ProcessDefinition } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listProcessDefinitions(params?: FlowableFetchParams) {
  return await flowableFetch<ListResponse<ProcessDefinition>>(
    'repository/process-definitions',
    { params }
  )
}
