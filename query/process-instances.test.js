import { queryProcessInstances } from './process-instances'

describe('The queryProcessInstances() method', () => {
  it('should return a set of process instances', async () => {
    const results = await queryProcessInstances({})

    expect(results).to.have.all.keys([
      'data',
      'sort',
      'order',
      'start',
      'size',
      'total',
    ])

    expect(results).to.have.property('data').with.lengthOf(10)
    expect(results).to.have.property('sort', 'id')
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)
    expect(results).to.have.property('size', 10)
    expect(results).to.have.property('total').above(10)
  })

  it('should be possible to filter by processDefinitionKey', async () => {
    const results = await queryProcessInstances({
      processDefinitionKey: 'fl_ItemRequest',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const processInstance of results.data) {
      expect(processInstance.processDefinitionId).to.match(/^fl_ItemRequest\:/)
    }
  })

  it('should be possible to filter by a variable', async () => {
    const results = await queryProcessInstances({
      variables: [
        {
          name: 'barcode',
          value: '2168088-10',
          operation: 'equals',
        },
      ],
    })

    expect(results).to.have.property('data').with.lengthOf(10)
  })
})
