type ListResponse<T> = {
    data: T[];
    order: 'asc' | 'desc';
    size: number;
    sort: string;
    start: number;
    total: number;
};
type VariableValue = string | number | boolean | null;
type VariableType = 'string' | 'short' | 'integer' | 'long' | 'double' | 'boolean' | 'date';
type Variable = {
    name: string;
    value: VariableValue;
    type?: VariableType;
    variableScope?: 'global' | 'local';
};
type ProcessDefinition = {
    id: string;
    url: string;
    version: number;
    key: string;
    category: string;
    suspended: boolean;
    name: string;
    description: string;
    deploymentId: string;
    deploymentUrl: string;
    graphicalNotationDefined: boolean;
    resource: string;
    diagramResource: string;
    startFormDefined: boolean;
};
type ProcessInstance = {
    id: string;
    url: string;
    name: string | null;
    businessKey: string | null;
    businessStatus: string | null;
    suspended: boolean;
    ended: boolean;
    processDefinitionId: string;
    processDefinitionUrl: string;
    processDefinitionName: string;
    processDefinitionDescription: string | null;
    activityId: string | null;
    startUserId: string | null;
    startTime: Date;
    variables: Variable[];
    callbackId: string | null;
    callbackType: string | null;
    referenceId: string | null;
    referenceType: string | null;
    propagatedStageInstanceId: string | null;
    tenantId: string;
    completed: boolean;
};
type Task = {
    id: string;
    url: string;
    owner: string | null;
    assignee: string;
    delegationState: string | null;
    name: string;
    description: string;
    createTime: Date;
    dueDate: string | null;
    priority: number;
    suspended: boolean;
    claimTime: string | null;
    taskDefinitionKey: string;
    scopeDefinitionId: string | null;
    scopeId: string | null;
    subScopeId: string | null;
    scopeType: string | null;
    propagatedStageInstanceId: string | null;
    tenantId: string | null;
    category: string | null;
    formKey: string | null;
    parentTaskId: string | null;
    parentTaskUrl: string | null;
    executionId: string;
    executionUrl: string;
    processInstanceId: string;
    processInstanceUrl: string;
    processDefinitionId: string;
    processDefinitionUrl: string;
    variables: {
        name: string;
        value: VariableValue;
        scope: 'global' | 'local';
    }[];
};
type Job = {
    id: string;
    url: string;
    processInstanceId: string;
    processInstanceUrl: string;
    processDefinitionId: string;
    processDefinitionUrl: string;
    executionId: string;
    executionUrl: string;
    retries: number;
    exceptionMessage: string | null;
    dueDate: string;
    tenantId: string | null;
};
type HistoricTaskInstance = {
    id: string;
    processDefinitionId: string;
    processDefinitionUrl: string;
    processInstanceId: string;
    processInstanceUrl: string;
    executionId: string;
    name: string;
    description: string;
    deleteReason: string | null;
    owner: string;
    assignee: string;
    startTime: string;
    endTime: string;
    durationInMillis: number;
    workTimeInMillis: number;
    claimTime: string;
    taskDefinitionKey: string;
    formKey: string | null;
    priority: number;
    dueDate: string;
    parentTaskId: string | null;
    url: string;
    taskVariables: Variable[];
    processVariables: Variable[];
    tenantId: string | null;
};
type HistoricVariableInstance = {
    id: string;
    processInstanceId: string;
    processInstanceUrl: string;
    taskId: string;
    variable: Variable;
};
type PagingAndSorting = {
    sort?: string;
    order?: 'asc' | 'desc';
    start?: number;
    size?: number;
};
type VariableQuery = {
    name: string;
    value: VariableValue;
    operation: 'equals' | 'notEquals' | 'equalsIgnoreCase' | 'notEqualsIgnoreCase' | 'lessThan' | 'greaterThan' | 'lessThanOrEquals' | 'greaterThanOrEquals' | 'like';
    type?: VariableType;
};
type ErrorResponse = {
    message: string;
    exception: string;
};

declare function startProcessInstance(processDefinitionKey: string, variables?: Record<string, VariableValue> | Variable[]): Promise<ProcessInstance>;

type FlowableFetchParams = Record<string, string | number | boolean>;

declare function listProcessInstances(params?: FlowableFetchParams): Promise<ListResponse<ProcessInstance>>;

declare function getProcessInstanceVariable(processInstanceId: string, variableName: string): Promise<VariableValue | null>;

declare function deleteProcessInstance(processInstanceId: string): Promise<void>;

declare function createProcessInstanceVariables(processInstanceId: string, variables: Record<string, VariableValue> | Variable[]): Promise<Variable[]>;

declare function updateProcessInstanceVariable(processInstanceId: string, name: string, value: VariableValue): Promise<Variable>;

declare function listTasks(params?: FlowableFetchParams): Promise<ListResponse<Task>>;

declare function getDeadletterJobs(params?: FlowableFetchParams): Promise<ListResponse<Job>>;

declare function moveDeadletterJob(jobId: string): Promise<void>;

declare function getTimerJobs(params?: FlowableFetchParams): Promise<ListResponse<Job>>;

declare function moveTimerJob(jobId: string): Promise<void>;

declare function listHistoricTaskInstances(params?: FlowableFetchParams): Promise<ListResponse<HistoricTaskInstance>>;

declare function listHistoricVariableInstances(params?: FlowableFetchParams): Promise<ListResponse<HistoricVariableInstance>>;

declare function deleteHistoricProcessInstance(processInstanceId: string): Promise<void>;

type Body$1 = PagingAndSorting & {
    processDefinitionKey?: string;
    variables?: VariableQuery[];
};
declare function queryProcessInstances(body: Body$1): Promise<ListResponse<ProcessInstance>>;

type Body = PagingAndSorting & {
    name?: string;
    nameLike?: string;
    description?: string;
    assignee?: string;
    assigneeLike?: string;
    unassigned?: boolean;
    taskDefinitionKey?: string;
    taskDefinitionKeyLike?: string;
    processInstanceId?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionKeyLike?: string;
    processDefinitionName?: string;
    processDefinitionNameLike?: string;
    includeTaskLocalVariables?: boolean;
    includeProcessVariables?: boolean;
    taskVariables?: VariableQuery[];
    processInstanceVariables?: VariableQuery[];
};
declare function queryTasks(body: Body): Promise<ListResponse<Task>>;

declare function listProcessDefinitions(params?: FlowableFetchParams): Promise<ListResponse<ProcessDefinition>>;

declare function suspendProcessDefinition(id: string, includeProcessInstances?: boolean): Promise<ProcessDefinition>;

declare function getResourceContent(deploymentId: string, resourceId: string): Promise<string | null>;

export { ErrorResponse, HistoricTaskInstance, HistoricVariableInstance, Job, ListResponse, PagingAndSorting, ProcessDefinition, ProcessInstance, Task, Variable, VariableQuery, VariableType, VariableValue, createProcessInstanceVariables, deleteHistoricProcessInstance, deleteProcessInstance, getDeadletterJobs, getProcessInstanceVariable, getResourceContent, getTimerJobs, listHistoricTaskInstances, listHistoricVariableInstances, listProcessDefinitions, listProcessInstances, listTasks, moveDeadletterJob, moveTimerJob, queryProcessInstances, queryTasks, startProcessInstance, suspendProcessDefinition, updateProcessInstanceVariable };
