import type { ListResponse, HistoricVariableInstance } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listHistoricVariableInstances(
  params?: FlowableFetchParams
) {
  return await flowableFetch<ListResponse<HistoricVariableInstance>>(
    'history/historic-variable-instances',
    { params }
  )
}
