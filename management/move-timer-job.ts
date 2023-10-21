import flowableFetch from '../lib/flowable-fetch'

export async function moveTimerJob(jobId: string) {
  await flowableFetch(`management/timer-jobs/${jobId}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
