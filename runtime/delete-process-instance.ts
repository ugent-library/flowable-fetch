import flowableFetch from '../lib/flowable-fetch'

export async function deleteProcessInstance(
  processInstanceId: string,
  deleteReason?: string
): Promise<void> {
  const query = deleteReason
    ? '?' + new URLSearchParams({ deleteReason }).toString()
    : ''

  await flowableFetch(
    `runtime/process-instances/${processInstanceId}${query}`,
    {
      method: 'DELETE',
    }
  )
}
