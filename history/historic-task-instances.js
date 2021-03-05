import flowableFetch from '../flowable-fetch'

export async function listHistoricTaskInstances(params) {
  return await flowableFetch('history/historic-task-instances', { params })
}
