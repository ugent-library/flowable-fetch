type ListResponse<T> = {
    data: T[];
    order: 'asc' | 'desc';
    size: number;
    sort: string;
    start: number;
    total: number;
};
type VariableValue = string | number | boolean | null;
type Variable = {
    name: string;
    value: VariableValue;
    type?: 'string' | 'short' | 'integer' | 'long' | 'double' | 'boolean' | 'date';
};
type ProcessDefinition = {};
type ProcessInstance = {
    processDefinitionId: string;
};
type Task = {};
type Job = {};
type HistoricTaskInstance = {
    processDefinitionId: string;
    processInstanceId: string;
    startTime: string;
    endTime: string;
    taskDefinitionKey: string;
};
type HistoricVariableInstance = {
    variable: Variable;
};

declare function startProcessInstance(processDefinitionKey: string, variables?: Record<string, VariableValue> | Variable[]): Promise<unknown>;

type FlowableFetchParams = Record<string, string | number | boolean>;

declare function listProcessInstances(params?: FlowableFetchParams): Promise<ListResponse<ProcessInstance>>;

declare function getProcessInstanceVariable(processInstanceId: string, variableName: string): Promise<VariableValue>;

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

declare function queryProcessInstances(body: object): Promise<ListResponse<ProcessInstance>>;

declare function listProcessDefinitions(params?: FlowableFetchParams): Promise<ListResponse<ProcessDefinition>>;

declare function suspendProcessDefinition(id: string, includeProcessInstances?: boolean): Promise<ProcessDefinition>;

declare function getResourceContent(deploymentId: string, resourceId: string): Promise<string | null>;

export { createProcessInstanceVariables, deleteHistoricProcessInstance, deleteProcessInstance, getDeadletterJobs, getProcessInstanceVariable, getResourceContent, getTimerJobs, listHistoricTaskInstances, listHistoricVariableInstances, listProcessDefinitions, listProcessInstances, listTasks, moveDeadletterJob, moveTimerJob, queryProcessInstances, startProcessInstance, suspendProcessDefinition, updateProcessInstanceVariable };
