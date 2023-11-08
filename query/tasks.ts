import type {
  ListResponse,
  PagingAndSorting,
  Task,
  VariableQuery,
} from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

type Body = PagingAndSorting & {
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
  taskVariables?: VariableQuery[]
  processInstanceVariables?: VariableQuery[]
}

export async function queryTasks(body: Body): Promise<ListResponse<Task>> {
  return await flowableFetch<ListResponse<Task>>('query/tasks', {
    method: 'POST',
    body,
  })
}
