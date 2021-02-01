import flowableFetch from '../flowable-fetch'

export async function createProcessInstanceVariables(processInstanceId, variables) {
  if (typeof variables !== 'object') {
    throw new Error(`Invalid type for parameter 'variables' (${typeof variables}).`)
  }

  let vars = variables

  if (!Array.isArray(variables)) {
    vars = Object.entries(variables).map(([name, value]) => ({ name, value }))
  }

  await flowableFetch(`runtime/process-instances/${processInstanceId}/variables`, {
    method: 'POST',
    body: vars,
  })
}
