import type { Flowable } from '../flowable'

export const objectToVariables = (
  variables: Record<string, Flowable.VariableValue>
): Flowable.Variable[] =>
  Object.entries(variables).map(([name, value]) => ({ name, value }))
