import flowableFetch from '../lib/flowable-fetch'

export async function deleteProcessInstance(
  processInstanceId: string
): Promise<void> {
  await flowableFetch(`runtime/process-instances/${processInstanceId}`, {
    method: 'DELETE',
  })
}
