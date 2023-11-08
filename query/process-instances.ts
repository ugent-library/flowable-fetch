import type {
  ListResponse,
  PagingAndSorting,
  ProcessInstance,
  VariableQuery,
} from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

type Body = PagingAndSorting & {
  processDefinitionKey?: string
  variables?: VariableQuery[]
}

export async function queryProcessInstances(
  body: Body
): Promise<ListResponse<ProcessInstance>> {
  return await flowableFetch<ListResponse<ProcessInstance>>(
    'query/process-instances',
    {
      method: 'POST',
      body,
    }
  )
}
