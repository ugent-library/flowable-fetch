import type { ProcessDefinition } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function suspendProcessDefinition(
  id: string,
  includeProcessInstances = false
): Promise<ProcessDefinition> {
  return await flowableFetch<ProcessDefinition>(
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
