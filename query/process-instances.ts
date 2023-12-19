import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

type Body = Flowable.PagingAndSorting & {
  processDefinitionKey?: string
  variables?: Flowable.VariableQuery[]
}

export async function queryProcessInstances(
  body: Body
): Promise<Flowable.ListResponse<Flowable.ProcessInstance>> {
  return await flowableFetch<Flowable.ListResponse<Flowable.ProcessInstance>>(
    'query/process-instances',
    {
      method: 'POST',
      body,
    }
  )
}
