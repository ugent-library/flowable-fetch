import flowableFetch from '../lib/flowable-fetch.js'
import { objectToVariables } from '../lib/util.js'

export async function createProcessInstanceVariables(processInstanceId, variables) {
  if (typeof variables !== 'object') {
    throw new Error(`Invalid type for parameter 'variables' (${typeof variables}).`)
  }

  if (!Array.isArray(variables)) {
    variables = objectToVariables(variables)
  }

  await flowableFetch(`runtime/process-instances/${processInstanceId}/variables`, {
    method: 'POST',
    body: variables,
  })
}
