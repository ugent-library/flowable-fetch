import flowableFetch from '../flowable-fetch.js'

export async function listProcessInstances(params) {
  return await flowableFetch('runtime/process-instances', { params })
}
