import type { Variable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function getProcessInstanceVariable(
  processInstanceId: string,
  variableName: string
) {
  const variableData = await flowableFetch<Variable>(
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
