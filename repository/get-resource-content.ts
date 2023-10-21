import { flowableFetchText } from '../lib/flowable-fetch'

export async function getResourceContent(
  deploymentId: string,
  resourceId: string
): Promise<string | null> {
  return await flowableFetchText(
    `repository/deployments/${deploymentId}/resourcedata/${resourceId}`
  )
}
