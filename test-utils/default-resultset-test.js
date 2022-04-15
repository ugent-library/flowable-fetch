export default function defaultResultSetTest(testCallback, defaultSortColumn) {
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

    expect(results).to.have.property('data').with.lengthOf(10)
    expect(results).to.have.property('sort', defaultSortColumn)
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)
    expect(results).to.have.property('size', 10)
    expect(results).to.have.property('total').above(10)
  }
}
