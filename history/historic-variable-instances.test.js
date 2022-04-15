import { listHistoricVariableInstances } from './historic-variable-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listHistoricVariableInstances() method', () => {
  it(
    'should return a set of historic variable instances',
    defaultResultSetTest(listHistoricVariableInstances, 'variableName')
  )

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
