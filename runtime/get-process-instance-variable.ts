import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function getProcessInstanceVariable(
  processInstanceId: string,
  variableName: string
): Promise<Flowable.VariableValue | null> {
  const variableData = await flowableFetch<Flowable.Variable>(
    `runtime/process-instances/${processInstanceId}/variables/${variableName}`,
    {
      allowedFailStatuses: [404],
    }
  )

  if (variableData) {
    return variableData.value
  }

  return null
}
