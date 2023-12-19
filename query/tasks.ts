import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

type Body = Flowable.PagingAndSorting & {
  name?: string
  nameLike?: string
  description?: string
  assignee?: string
  assigneeLike?: string
  unassigned?: boolean
  taskDefinitionKey?: string
  taskDefinitionKeyLike?: string
  processInstanceId?: string
  processDefinitionId?: string
  processDefinitionKey?: string
  processDefinitionKeyLike?: string
  processDefinitionName?: string
  processDefinitionNameLike?: string
  includeTaskLocalVariables?: boolean
  includeProcessVariables?: boolean
  taskVariables?: Flowable.VariableQuery[]
  processInstanceVariables?: Flowable.VariableQuery[]
}

export async function queryTasks(
  body: Body
): Promise<Flowable.ListResponse<Flowable.Task>> {
  return await flowableFetch<Flowable.ListResponse<Flowable.Task>>(
    'query/tasks',
    {
      method: 'POST',
      body,
    }
  )
}
