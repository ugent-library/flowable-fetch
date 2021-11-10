import flowableFetch from '../flowable-fetch.js'

export async function queryProcessInstances(body) {
  return await flowableFetch('query/process-instances', {
    method: 'POST',
    body,
  })
}
