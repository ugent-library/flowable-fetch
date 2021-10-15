import flowableFetch from '../flowable-fetch'

export async function moveTimerJob(id) {
  return await flowableFetch(`management/timer-jobs/${id}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
