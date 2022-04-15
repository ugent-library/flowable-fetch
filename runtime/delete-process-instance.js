import flowableFetch from '../lib/flowable-fetch.js'

export async function deleteProcessInstance(processInstanceId) {
  return await flowableFetch(`runtime/process-instances/${processInstanceId}`, {
    method: 'DELETE',
  })
}
