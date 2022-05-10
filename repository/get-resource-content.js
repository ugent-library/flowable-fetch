import flowableFetch from '../lib/flowable-fetch.js'

export async function getResourceContent(deploymentId, resourceName) {
  return await flowableFetch(
    `repository/deployments/${deploymentId}/resourcedata/${resourceName}`
  )
}
