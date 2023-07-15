import flowableFetch from '../lib/flowable-fetch'

export async function deleteProcessInstance(processInstanceId: string) {
  await flowableFetch(`runtime/process-instances/${processInstanceId}`, {
    method: 'DELETE',
  })
}
