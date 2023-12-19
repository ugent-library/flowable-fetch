import type { Flowable } from '../flowable'

import flowableFetch, { type FlowableFetchParams } from '../lib/flowable-fetch'

export async function getDeadletterJobs(params?: FlowableFetchParams) {
  return await flowableFetch<Flowable.ListResponse<Flowable.Job>>(
    'management/deadletter-jobs',
    {
      params,
    }
  )
}
