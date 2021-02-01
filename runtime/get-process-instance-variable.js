import flowableFetch from '../flowable-fetch'

export async function getProcessInstanceVariable(processInstanceId, variableName) {
  const variableData = await flowableFetch(`runtime/process-instances/${processInstanceId}/variables/${variableName}`)

  if (variableData) {
    return variableData.value
  }

  return null
}
