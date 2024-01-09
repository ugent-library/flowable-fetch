export declare namespace Flowable {
  type ListResponse<T> = {
    data: T[]
    order: 'asc' | 'desc'
    size: number
    sort: string
    start: number
    total: number
  }

  type VariableValue = string | number | boolean | null

  type VariableType =
    | 'string'
    | 'short'
    | 'integer'
    | 'long'
    | 'double'
    | 'boolean'
    | 'date'

  type Variable = {
    name: string
    value: VariableValue
    type?: VariableType
    variableScope?: 'global' | 'local'
  }

  type ProcessDefinition = {
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

  type ProcessInstance = {
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

  type TaskDelegationState = null | 'pending' | 'resolved'

  type Task = {
    id: string
    url: string
    owner: string | null
    assignee: string
    delegationState: TaskDelegationState
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

  type Job = {
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

  type HistoricTaskInstance = {
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

  type HistoricVariableInstance = {
    id: string
    processInstanceId: string
    processInstanceUrl: string
    taskId: string
    variable: Variable
  }

  type PagingAndSorting = {
    sort?: string
    order?: 'asc' | 'desc'
    start?: number
    size?: number
  }

  type VariableQuery = {
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

  type ErrorResponse = {
    message: string
    exception: string
  }
}
