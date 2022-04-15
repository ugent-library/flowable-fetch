import flowableFetch from '../lib/flowable-fetch.js'

export async function updateProcessInstanceVariable(processInstanceId, name, value) {
  return await flowableFetch(`runtime/process-instances/${processInstanceId}/variables/${name}`, {
    method: 'PUT',
    body: {
      name,
      value,
    },
  })
}
