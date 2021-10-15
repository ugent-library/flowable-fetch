import flowableFetch from '../flowable-fetch'

export async function getTimerJobs(params = null) {
  return await flowableFetch('management/timer-jobs', { params })
}
