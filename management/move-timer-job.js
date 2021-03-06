import flowableFetch from '../lib/flowable-fetch.js'

export async function moveTimerJob(id) {
  return await flowableFetch(`management/timer-jobs/${id}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
