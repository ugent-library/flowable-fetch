import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

type TaskDetails = {
  assignee?: string
  delegationState?: Flowable.TaskDelegationState
  description?: string
  dueDate?: string
  name?: string
  owner?: string
  parentTaskId?: string
  priority?: number
}

export async function updateTask(
  taskId: string,
  taskDetails: TaskDetails
): Promise<Flowable.Task> {
  return await flowableFetch<Flowable.Task>(`runtime/tasks/${taskId}`, {
    method: 'PUT',
    body: taskDetails,
  })
}
