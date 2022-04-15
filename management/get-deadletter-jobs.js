import flowableFetch from '../lib/flowable-fetch.js'

export async function getDeadletterJobs() {
  return await flowableFetch('management/deadletter-jobs')
}
