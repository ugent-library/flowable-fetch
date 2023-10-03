import flowableFetch from '../lib/flowable-fetch.js'

export async function getTimerJobs(params) {
  return await flowableFetch('management/timer-jobs', { params })
}
