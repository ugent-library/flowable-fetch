import type { Flowable } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listHistoricVariableInstances(
  params?: FlowableFetchParams
) {
  return await flowableFetch<
    Flowable.ListResponse<Flowable.HistoricVariableInstance>
  >('history/historic-variable-instances', { params })
}
