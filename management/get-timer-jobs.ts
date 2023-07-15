import type { ListResponse, Job } from '../flowable'
import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function getTimerJobs(params?: FlowableFetchParams) {
  return await flowableFetch<ListResponse<Job>>('management/timer-jobs', {
    params,
  })
}
