import type { Flowable } from '../flowable'
import flowableFetch from '../lib/flowable-fetch'

export async function getHistoricProcessInstance(processInstanceId: string) {
  return await flowableFetch<Flowable.HistoricProcessInstance>(
    `history/historic-process-instances/${processInstanceId}`
  )
}
