import flowableFetch from '../lib/flowable-fetch.js'

export async function deleteHistoricProcessInstance(processInstanceId) {
  return await flowableFetch(
    `history/historic-process-instances/${processInstanceId}`,
    {
      method: 'DELETE',
    }
  )
}
