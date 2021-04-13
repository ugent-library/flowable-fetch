import flowableFetch from '../flowable-fetch'

export async function deleteProcessInstance(processInstanceId) {
  return await flowableFetch(`runtime/process-instances/${processInstanceId}`, {
    method: 'DELETE',
  })
}
