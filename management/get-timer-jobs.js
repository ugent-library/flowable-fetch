import flowableFetch from '../lib/flowable-fetch.js'

export async function getTimerJobs(params = null) {
  return await flowableFetch('management/timer-jobs', { params })
}
