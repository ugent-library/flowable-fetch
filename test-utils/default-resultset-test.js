export default function defaultResultSetTest(
  testCallback,
  defaultSortColumn,
  expectedSetSize = 10,
  testPredicate = null
) {
  return async () => {
    const results = await testCallback()

    expect(results).to.have.all.keys([
      'data',
      'sort',
      'order',
      'start',
      'size',
      'total',
    ])

    expect(results).to.have.property('data').with.lengthOf(expectedSetSize)
    expect(results).to.have.property('sort', defaultSortColumn)
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)
    expect(results).to.have.property('size', expectedSetSize)
    expect(results).to.have.property('total').gte(expectedSetSize)

    if (typeof testPredicate === 'function') {
      results.data.forEach(testPredicate)
    }
  }
}
