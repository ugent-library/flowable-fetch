import type { Flowable } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function listTasks(
  params?: FlowableFetchParams
): Promise<Flowable.ListResponse<Flowable.Task>> {
  return await flowableFetch<Flowable.ListResponse<Flowable.Task>>(
    'runtime/tasks',
    {
      params,
    }
  )
}
