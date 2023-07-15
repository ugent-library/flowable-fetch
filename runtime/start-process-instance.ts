import type { Variable, VariableValue } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'
import { objectToVariables } from '../lib/util'

export async function startProcessInstance(
  processDefinitionKey: string,
  variables: Record<string, VariableValue> | Variable[] = []
) {
  if (typeof variables !== 'object') {
    throw new Error(
      `Invalid type for parameter 'variables' (${typeof variables}).`
    )
  }

  const body: {
    processDefinitionKey: string
    variables?: { name: string; value: unknown }[]
  } = {
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
