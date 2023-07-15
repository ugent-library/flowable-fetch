import type { Variable, VariableValue } from '../flowable'

export const objectToVariables = (
  variables: Record<string, VariableValue>
): Variable[] =>
  Object.entries(variables).map(([name, value]) => ({ name, value }))
