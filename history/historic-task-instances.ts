import type { Flowable } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listHistoricTaskInstances(params?: FlowableFetchParams) {
  return await flowableFetch<
    Flowable.ListResponse<Flowable.HistoricTaskInstance>
  >('history/historic-task-instances', { params })
}
