import flowableFetch from '../flowable-fetch'

export async function listProcessDefinitions(params) {
  return await flowableFetch('repository/process-definitions', { params })
}
