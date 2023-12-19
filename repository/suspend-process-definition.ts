import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function suspendProcessDefinition(
  id: string,
  includeProcessInstances = false
): Promise<Flowable.ProcessDefinition> {
  return await flowableFetch<Flowable.ProcessDefinition>(
    `repository/process-definitions/${id}`,
    {
      method: 'PUT',
      body: {
        action: 'suspend',
        includeProcessInstances,
      },
    }
  )
}
