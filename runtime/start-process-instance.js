import flowableFetch from '../flowable-fetch'
import { objectToVariables } from '../lib/util'

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
