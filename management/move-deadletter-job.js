import flowableFetch from '../flowable-fetch'

export async function moveDeadletterJob(id) {
  await flowableFetch(`management/deadletter-jobs/${id}`, {
    method: 'POST',
    body: { action: 'move' },
  })
}
