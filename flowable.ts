export type ListResponse<T> = {
  data: T[]
  order: 'asc' | 'desc'
  size: number
  sort: string
  start: number
  total: number
}

export type VariableValue = string | number | boolean | null

export type VariableType =
  | 'string'
  | 'short'
  | 'integer'
  | 'long'
  | 'double'
  | 'boolean'
  | 'date'

export type Variable = {
  name: string
  value: VariableValue
  type?: VariableType
  variableScope?: 'global' | 'local'
}

export type ProcessDefinition = {
  id: string
  url: string
  version: number
  key: string
  category: string
  suspended: boolean
  name: string
  description: string
  deploymentId: string
  deploymentUrl: string
  graphicalNotationDefined: boolean
  resource: string
  diagramResource: string
  startFormDefined: boolean
}

export type ProcessInstance = {
  id: string
  url: string
  name: string | null
  businessKey: string | null
  businessStatus: string | null
  suspended: boolean
  ended: boolean
  processDefinitionId: string
  processDefinitionUrl: string
  processDefinitionName: string
  processDefinitionDescription: string | null
  activityId: string | null
  startUserId: string | null
  startTime: Date
  variables: Variable[]
  callbackId: string | null
  callbackType: string | null
  referenceId: string | null
  referenceType: string | null
  propagatedStageInstanceId: string | null
  tenantId: string
  completed: boolean
}

export type Task = {
  id: string
  url: string
  owner: string | null
  assignee: string
  delegationState: string | null
  name: string
  description: string
  createTime: Date
  dueDate: string | null
  priority: number
  suspended: boolean
  claimTime: string | null
  taskDefinitionKey: string
  scopeDefinitionId: string | null
  scopeId: string | null
  subScopeId: string | null
  scopeType: string | null
  propagatedStageInstanceId: string | null
  tenantId: string | null
  category: string | null
  formKey: string | null
  parentTaskId: string | null
  parentTaskUrl: string | null
  executionId: string
  executionUrl: string
  processInstanceId: string
  processInstanceUrl: string
  processDefinitionId: string
  processDefinitionUrl: string
  variables: {
    name: string
    value: VariableValue
    scope: 'global' | 'local'
  }[]
}

export type Job = {
  id: string
  url: string
  processInstanceId: string
  processInstanceUrl: string
  processDefinitionId: string
  processDefinitionUrl: string
  executionId: string
  executionUrl: string
  retries: number
  exceptionMessage: string | null
  dueDate: string
  tenantId: string | null
}

export type HistoricTaskInstance = {
  id: string
  processDefinitionId: string
  processDefinitionUrl: string
  processInstanceId: string
  processInstanceUrl: string
  executionId: string
  name: string
  description: string
  deleteReason: string | null
  owner: string
  assignee: string
  startTime: string
  endTime: string
  durationInMillis: number
  workTimeInMillis: number
  claimTime: string
  taskDefinitionKey: string
  formKey: string | null
  priority: number
  dueDate: string
  parentTaskId: string | null
  url: string
  taskVariables: Variable[]
  processVariables: Variable[]
  tenantId: string | null
}

export type HistoricVariableInstance = {
  id: string
  processInstanceId: string
  processInstanceUrl: string
  taskId: string
  variable: Variable
}

export type PagingAndSorting = {
  sort?: string
  order?: 'asc' | 'desc'
  start?: number
  size?: number
}

export type VariableQuery = {
  name: string
  value: VariableValue
  operation:
    | 'equals'
    | 'notEquals'
    | 'equalsIgnoreCase'
    | 'notEqualsIgnoreCase'
    | 'lessThan'
    | 'greaterThan'
    | 'lessThanOrEquals'
    | 'greaterThanOrEquals'
    | 'like'
  type?: VariableType
}

export type ErrorResponse = {
  message: string
  exception: string
}
