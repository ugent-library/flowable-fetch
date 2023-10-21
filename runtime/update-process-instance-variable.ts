import type { Variable, VariableValue } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function updateProcessInstanceVariable(
  processInstanceId: string,
  name: string,
  value: VariableValue
): Promise<Variable> {
  return await flowableFetch<Variable>(
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
