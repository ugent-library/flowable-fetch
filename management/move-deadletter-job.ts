import flowableFetch from '../lib/flowable-fetch'

export async function moveDeadletterJob(jobId: string) {
  await flowableFetch(`management/deadletter-jobs/${jobId}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
