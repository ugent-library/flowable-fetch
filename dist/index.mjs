var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
import "dotenv/config";

// lib/flowable-fetch.ts
function flowableFetch(_0) {
  return __async(this, arguments, function* (route, options = {}) {
    const response = yield doFetch(route, options);
    return yield response.json();
  });
}
function flowableFetchText(_0) {
  return __async(this, arguments, function* (route, options = {}) {
    const response = yield doFetch(route, options);
    return yield response.text();
  });
}
function doFetch(_0) {
  return __async(this, arguments, function* (route, {
    params = {},
    method = "GET",
    headers: headersInit = {},
    body,
    allowedFailStatuses = []
  } = {}) {
    const url = new URL(route, process.env["FLOWABLE_HOST"]);
    Object.entries(params).forEach(
      ([name, value]) => url.searchParams.append(name, String(value))
    );
    const headers = new Headers(__spreadValues({
      Authorization: `Basic ${authSecret()}`,
      Accept: "application/json"
    }, headersInit));
    const init = {
      method,
      headers,
      cache: "no-store"
    };
    if (body) {
      init.body = JSON.stringify(body);
      headers.set("Content-Type", "application/json");
    }
    const response = yield fetch(url, init);
    if (response.ok === true || allowedFailStatuses.includes(response.status)) {
      return response;
    } else {
      if (response.headers.get("Content-Type") === "application/json") {
        const error = yield response.json();
        throw new Error(`${error.message}: ${error.exception}`);
      } else {
        const responseText = yield response.text();
        throw new Error(responseText != null ? responseText : response.statusText);
      }
    }
  });
}
function authSecret() {
  return Buffer.from(
    `${process.env["FLOWABLE_USER"]}:${process.env["FLOWABLE_PASSWORD"]}`
  ).toString("base64");
}

// lib/util.ts
var objectToVariables = (variables) => Object.entries(variables).map(([name, value]) => ({ name, value }));

// runtime/start-process-instance.ts
function startProcessInstance(_0) {
  return __async(this, arguments, function* (processDefinitionKey, variables = []) {
    if (typeof variables !== "object") {
      throw new Error(
        `Invalid type for parameter 'variables' (${typeof variables}).`
      );
    }
    const body = {
      processDefinitionKey
    };
    if (!Array.isArray(variables)) {
      variables = objectToVariables(variables);
    }
    if (variables.length) {
      body.variables = variables;
    }
    return yield flowableFetch(
      `runtime/process-instances`,
      {
        method: "POST",
        body
      }
    );
  });
}

// runtime/list-process-instances.ts
function listProcessInstances(params) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "runtime/process-instances",
      { params }
    );
  });
}

// runtime/get-process-instance-variable.ts
function getProcessInstanceVariable(processInstanceId, variableName) {
  return __async(this, null, function* () {
    const variableData = yield flowableFetch(
      `runtime/process-instances/${processInstanceId}/variables/${variableName}`,
      {
        allowedFailStatuses: [404]
      }
    );
    if (variableData) {
      return variableData.value;
    }
    return null;
  });
}

// runtime/delete-process-instance.ts
function deleteProcessInstance(processInstanceId) {
  return __async(this, null, function* () {
    yield flowableFetch(`runtime/process-instances/${processInstanceId}`, {
      method: "DELETE"
    });
  });
}

// runtime/create-process-instance-variables.ts
function createProcessInstanceVariables(processInstanceId, variables) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      `runtime/process-instances/${processInstanceId}/variables`,
      {
        method: "POST",
        body: Array.isArray(variables) ? variables : objectToVariables(variables)
      }
    );
  });
}

// runtime/update-process-instance-variable.ts
function updateProcessInstanceVariable(processInstanceId, name, value) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      `runtime/process-instances/${processInstanceId}/variables/${name}`,
      {
        method: "PUT",
        body: {
          name,
          value
        }
      }
    );
  });
}

// runtime/list-tasks.ts
function listTasks(params) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "runtime/tasks",
      {
        params
      }
    );
  });
}

// management/get-deadletter-jobs.ts
function getDeadletterJobs(params) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "management/deadletter-jobs",
      {
        params
      }
    );
  });
}

// management/move-deadletter-job.ts
function moveDeadletterJob(jobId) {
  return __async(this, null, function* () {
    yield flowableFetch(`management/deadletter-jobs/${jobId}`, {
      method: "POST",
      body: { action: "move" }
    });
  });
}

// management/get-timer-jobs.ts
function getTimerJobs(params) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "management/timer-jobs",
      {
        params
      }
    );
  });
}

// management/move-timer-job.ts
function moveTimerJob(jobId) {
  return __async(this, null, function* () {
    yield flowableFetch(`management/timer-jobs/${jobId}`, {
      method: "POST",
      body: { action: "move" }
    });
  });
}

// history/historic-task-instances.ts
function listHistoricTaskInstances(params) {
  return __async(this, null, function* () {
    return yield flowableFetch("history/historic-task-instances", { params });
  });
}

// history/historic-variable-instances.ts
function listHistoricVariableInstances(params) {
  return __async(this, null, function* () {
    return yield flowableFetch("history/historic-variable-instances", { params });
  });
}

// history/delete-historic-process-instance.ts
function deleteHistoricProcessInstance(processInstanceId) {
  return __async(this, null, function* () {
    yield flowableFetch(
      `history/historic-process-instances/${processInstanceId}`,
      {
        method: "DELETE"
      }
    );
  });
}

// query/process-instances.ts
function queryProcessInstances(body) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "query/process-instances",
      {
        method: "POST",
        body
      }
    );
  });
}

// query/tasks.ts
function queryTasks(body) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "query/tasks",
      {
        method: "POST",
        body
      }
    );
  });
}

// repository/list-process-definitions.ts
function listProcessDefinitions(params) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      "repository/process-definitions",
      { params }
    );
  });
}

// repository/suspend-process-definition.ts
function suspendProcessDefinition(id, includeProcessInstances = false) {
  return __async(this, null, function* () {
    return yield flowableFetch(
      `repository/process-definitions/${id}`,
      {
        method: "PUT",
        body: {
          action: "suspend",
          includeProcessInstances
        }
      }
    );
  });
}

// repository/get-resource-content.ts
function getResourceContent(deploymentId, resourceId) {
  return __async(this, null, function* () {
    return yield flowableFetchText(
      `repository/deployments/${deploymentId}/resourcedata/${resourceId}`
    );
  });
}
export {
  createProcessInstanceVariables,
  deleteHistoricProcessInstance,
  deleteProcessInstance,
  getDeadletterJobs,
  getProcessInstanceVariable,
  getResourceContent,
  getTimerJobs,
  listHistoricTaskInstances,
  listHistoricVariableInstances,
  listProcessDefinitions,
  listProcessInstances,
  listTasks,
  moveDeadletterJob,
  moveTimerJob,
  queryProcessInstances,
  queryTasks,
  startProcessInstance,
  suspendProcessDefinition,
  updateProcessInstanceVariable
};
