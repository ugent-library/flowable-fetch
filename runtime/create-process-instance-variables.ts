import type { Variable, VariableValue } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'
import { objectToVariables } from '../lib/util'

export async function createProcessInstanceVariables(
  processInstanceId: string,
  variables: Record<string, VariableValue> | Variable[]
) {
  return await flowableFetch<Variable[]>(
    `runtime/process-instances/${processInstanceId}/variables`,
    {
      method: 'POST',
      body: Array.isArray(variables) ? variables : objectToVariables(variables),
    }
  )
}
