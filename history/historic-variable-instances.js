import flowableFetch from '../lib/flowable-fetch.js'

export async function listHistoricVariableInstances(params) {
  return await flowableFetch('history/historic-variable-instances', { params })
}
