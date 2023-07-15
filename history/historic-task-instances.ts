import type { ListResponse, HistoricTaskInstance } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listHistoricTaskInstances(params?: FlowableFetchParams) {
  return await flowableFetch<ListResponse<HistoricTaskInstance>>(
    'history/historic-task-instances',
    { params }
  )
}
