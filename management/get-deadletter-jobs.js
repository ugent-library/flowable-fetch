import flowableFetch from '../flowable-fetch.js'

export async function getDeadletterJobs() {
  return await flowableFetch('management/deadletter-jobs')
}
