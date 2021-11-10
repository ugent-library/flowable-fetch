import flowableFetch from '../flowable-fetch.js'

export async function listHistoricTaskInstances(params) {
  return await flowableFetch('history/historic-task-instances', { params })
}
