import flowableFetch from '../lib/flowable-fetch.js'
import { objectToVariables } from '../lib/util.js'

export async function startProcessInstance(processDefinitionKey, variables = []) {
  if (typeof variables !== 'object') {
    throw new Error(`Invalid type for parameter 'variables' (${typeof variables}).`)
  }

  const body = {
    processDefinitionKey,
  }

  if (!Array.isArray(variables)) {
    variables = objectToVariables(variables)
  }

  if (variables.length) {
    body.variables = variables
  }

  return await flowableFetch(`runtime/process-instances`, {
    method: 'POST',
    body,
  })
}
