import flowableFetch from '../lib/flowable-fetch.js'

export async function listTasks(params) {
  return await flowableFetch('runtime/tasks', { params })
}
