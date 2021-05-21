import flowableFetch from '../flowable-fetch'

export async function moveDeadletterJob(id) {
  return await flowableFetch(`management/deadletter-jobs/${id}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
