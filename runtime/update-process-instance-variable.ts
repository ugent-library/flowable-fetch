import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function updateProcessInstanceVariable(
  processInstanceId: string,
  name: string,
  value: Flowable.VariableValue
): Promise<Flowable.Variable> {
  return await flowableFetch<Flowable.Variable>(
    `runtime/process-instances/${processInstanceId}/variables/${name}`,
    {
      method: 'PUT',
      body: {
        name,
        value,
      },
    }
  )
}
