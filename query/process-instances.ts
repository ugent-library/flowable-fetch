import type { ListResponse, ProcessInstance } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function queryProcessInstances(
  body: object /* TODO: proper typing */
) {
  return await flowableFetch<ListResponse<ProcessInstance>>(
    'query/process-instances',
    {
      method: 'POST',
      body,
    }
  )
}
