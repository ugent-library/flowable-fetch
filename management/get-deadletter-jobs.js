import flowableFetch from '../lib/flowable-fetch.js'

export async function getDeadletterJobs(params) {
  return await flowableFetch('management/deadletter-jobs', { params })
}
