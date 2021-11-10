import flowableFetch from '../flowable-fetch.js'

export async function suspendProcessDefinition(id, includeProcessInstances = false) {
  return await flowableFetch(`repository/process-definitions/${id}`, {
    method: 'PUT',
    body: {
      action: 'suspend',
      includeProcessInstances,
    },
  })
}
