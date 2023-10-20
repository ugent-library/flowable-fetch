import type { ListResponse, Task } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listTasks(
  params?: FlowableFetchParams
): Promise<ListResponse<Task>> {
  return await flowableFetch<ListResponse<Task>>('runtime/tasks', {
    params,
  })
}
