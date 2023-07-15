export type ListResponse<T> = {
  data: T[]
  order: 'asc' | 'desc'
  size: number
  sort: string
  start: number
  total: number
}

export type VariableValue = string | number | boolean | null

export type Variable = {
  name: string
  value: VariableValue
  type?: 'string' | 'short' | 'integer' | 'long' | 'double' | 'boolean' | 'date'
}

export type ProcessDefinition = {
  // TODO
}

export type ProcessInstance = {
  processDefinitionId: string
  // TODO
}

export type Task = {
  // TODO
}

export type Job = {
  // TODO
}

export type HistoricTaskInstance = {
  processDefinitionId: string
  processInstanceId: string
  startTime: string
  endTime: string
  taskDefinitionKey: string
  // TODO
}

export type HistoricVariableInstance = {
  variable: Variable
  // TODO
}
