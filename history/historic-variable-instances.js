import flowableFetch from '../flowable-fetch'

export async function listHistoricVariableInstances(params) {
  return await flowableFetch('history/historic-variable-instances', { params })
}
