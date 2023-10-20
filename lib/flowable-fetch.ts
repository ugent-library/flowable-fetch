export type FlowableFetchParams = Record<string, string | number | boolean>

type FlowableFetchInit = {
  params?: FlowableFetchParams
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: HeadersInit
  body?: object
  allowedFailStatuses?: number[]
}

export default async function flowableFetch<T = void>(
  route: string,
  options: FlowableFetchInit = {}
): Promise<T> {
  const response = await doFetch(route, options)

  return (await response.json()) as T
}

export async function flowableFetchText(
  route: string,
  options: FlowableFetchInit = {}
) {
  const response = await doFetch(route, options)
  return await response.text()
}

async function doFetch(
  route: string,
  {
    params = {},
    method = 'GET',
    headers: headersInit = {},
    body,
    allowedFailStatuses = [],
  }: FlowableFetchInit = {}
) {
  const url = new URL(route, process.env['FLOWABLE_HOST'])
  Object.entries(params).forEach(([name, value]) =>
    url.searchParams.append(name, String(value))
  )

  const headers = new Headers({
    Authorization: `Basic ${authSecret()}`,
    ...headersInit,
  })

  const init: RequestInit = {
    method,
    headers,
  }

  if (body) {
    init.body = JSON.stringify(body)
    headers.set('Content-Type', 'application/json')
  }

  const response = await fetch(url, init)

  if (response.ok === true || allowedFailStatuses.includes(response.status)) {
    return response
  } else {
    throw Error(await response.text())
  }
}

function authSecret() {
  return Buffer.from(
    `${process.env['FLOWABLE_USER']}:${process.env['FLOWABLE_PASSWORD']}`
  ).toString('base64')
}
