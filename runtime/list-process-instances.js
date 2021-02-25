import flowableFetch from '../flowable-fetch'

export async function listProcessInstances(params) {
  return await flowableFetch('runtime/process-instances', { params })
}
