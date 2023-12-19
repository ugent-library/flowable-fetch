import type { Flowable } from '../flowable'
import { expect } from 'vitest'

export default function defaultResultSetTest<T>(
  testCallback: () => Promise<Flowable.ListResponse<T>>,
  defaultSortColumn: string,
  expectedSetSize = 10,
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

    expect(results).to.have.property('sort', defaultSortColumn)
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)

    if (expectedSetSize >= 0) {
      expect(results).to.have.property('size', expectedSetSize)
      expect(results).to.have.property('total').gte(expectedSetSize)
      expect(results).to.have.property('data').with.lengthOf(expectedSetSize)
    }

    if (typeof testPredicate === 'function') {
      results.data.forEach(testPredicate)
    }
  }
}
