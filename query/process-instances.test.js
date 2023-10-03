import { queryProcessInstances } from './process-instances'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The queryProcessInstances() method', () => {
  it(
    'should return a set of process instances',
    defaultResultSetTest(() => queryProcessInstances({}), 'id')
  )

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

  rejectionTest(
    queryProcessInstances,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
