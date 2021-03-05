import flowableFetch from '../flowable-fetch'

export async function listTasks(params) {
  return await flowableFetch('runtime/tasks', { params })
}
