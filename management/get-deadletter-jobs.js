import flowableFetch from '../flowable-fetch'

export async function getDeadletterJobs() {
  return await flowableFetch('management/deadletter-jobs')
}
