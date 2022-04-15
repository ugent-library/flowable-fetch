import { listHistoricVariableInstances } from './historic-variable-instances'

describe('The listHistoricVariableInstances() method', () => {
  it('should return a set of variable instances', async () => {
    const results = await listHistoricVariableInstances()

    expect(results).to.have.all.keys([
      'data',
      'sort',
      'order',
      'start',
      'size',
      'total',
    ])

    expect(results).to.have.property('data').with.lengthOf(10)
    expect(results).to.have.property('sort', 'variableName')
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)
    expect(results).to.have.property('size', 10)
    expect(results).to.have.property('total').above(10)
  })

  it('should be possible to filter by variableName', async () => {
    const results = await listHistoricVariableInstances({
      variableName: 'barcode',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const variableInstance of results.data) {
      expect(variableInstance.variable.name).to.equal('barcode')
      expect(variableInstance.variable.type).to.equal('string')
      expect(variableInstance.variable.value).to.match(
        /^(|\d{12}|\d{7}\-\d{2})$/
      )
    }
  })

  it('should be possible to filter by processInstanceId', async () => {
    const results = await listHistoricVariableInstances({
      processInstanceId: '18088203',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const variableInstance of results.data) {
      expect(variableInstance.processInstanceId).to.equal('18088203')
    }
  })
})
