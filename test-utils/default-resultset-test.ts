import { expect } from 'vitest'

import type { ListResponse } from '../flowable'

export default function defaultResultSetTest<T>(
  testCallback: () => Promise<ListResponse<T>>,
  defaultSortColumn: string,
  testPredicate: ((result: T) => void) | null = null
) {
  return async () => {
    const results = await testCallback()

    if (!results || typeof results === 'string') {
      throw new Error('Invalid result set test')
    }

    expect(results).to.have.all.keys([
      'data',
      'sort',
      'order',
      'start',
      'size',
      'total',
    ])

    expect(results).to.have.property('data').with.lengthOf(10)
    expect(results).to.have.property('sort', defaultSortColumn)
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)
    expect(results).to.have.property('size', 10)
    expect(results).to.have.property('total').above(10)

    if (typeof testPredicate === 'function') {
      results.data.forEach(testPredicate)
    }
  }
}
