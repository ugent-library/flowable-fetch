import type { ListResponse, Job } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function getDeadletterJobs(params?: FlowableFetchParams) {
  return await flowableFetch<ListResponse<Job>>('management/deadletter-jobs', {
    params,
  })
}
