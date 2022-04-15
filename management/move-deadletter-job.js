import flowableFetch from '../lib/flowable-fetch.js'

export async function moveDeadletterJob(id) {
  return await flowableFetch(`management/deadletter-jobs/${id}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
