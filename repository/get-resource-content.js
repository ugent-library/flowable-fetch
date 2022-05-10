import flowableFetch from '../lib/flowable-fetch.js'

export async function getResourceContent(deploymentId, resourceId) {
  return await flowableFetch(
    `repository/deployments/${deploymentId}/resourcedata/${resourceId}`,
    {
      returnText: true,
    }
  )
}
