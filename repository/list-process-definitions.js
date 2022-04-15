import flowableFetch from '../lib/flowable-fetch.js'

export async function listProcessDefinitions(params) {
  return await flowableFetch('repository/process-definitions', { params })
}
