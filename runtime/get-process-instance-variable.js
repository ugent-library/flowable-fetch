import flowableFetch from '../lib/flowable-fetch.js'

export async function getProcessInstanceVariable(processInstanceId, variableName) {
  const variableData = await flowableFetch(`runtime/process-instances/${processInstanceId}/variables/${variableName}`)

  if (variableData) {
    return variableData.value
  }

  return null
}
