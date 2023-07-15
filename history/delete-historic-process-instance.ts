import flowableFetch from '../lib/flowable-fetch'

export async function deleteHistoricProcessInstance(processInstanceId: string) {
  await flowableFetch(
    `history/historic-process-instances/${processInstanceId}`,
    {
      method: 'DELETE',
    }
  )
}
