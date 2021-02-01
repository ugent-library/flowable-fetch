import flowableFetch from '../flowable-fetch'

export async function updateProcessInstanceVariable(processInstanceId, name, value) {
  return await flowableFetch(`runtime/process-instances/${processInstanceId}/variables/${name}`, {
    method: 'PUT',
    body: {
      name,
      value,
    },
  })
}
