import fetch from 'node-fetch'

export default async function (
  route,
  {
    params = {},
    method = 'GET',
    headers = {},
    body,
    returnText = false,
    allowedFailStatuses = [],
  } = {}
) {
  const url = new URL(route, process.env.FLOWABLE_HOST)

  Object.entries(params).forEach((item) => url.searchParams.append(...item))

  const init = {
    method,
    headers,
  }

  if (body) {
    init.body = JSON.stringify(body)
    init.headers['Content-Type'] = 'application/json'
  }

  init.headers['Authorization'] =
    'Basic ' +
    Buffer.from(
      `${process.env.FLOWABLE_USER}:${process.env.FLOWABLE_PASSWORD}`
    ).toString('base64')

  const response = await fetch(url, init)

  if (response.ok === true || allowedFailStatuses.includes(response.status)) {
    try {
      if (returnText) {
        return await response.text()
      } else {
        return await response.json()
      }
    } catch {
      return null
    }
  } else {
    throw Error(await response.text())
  }
}
