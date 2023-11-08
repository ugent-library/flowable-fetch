import { describe, expect, it } from 'vitest'

import { queryTasks } from './tasks'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The queryTasks() method', () => {
  it(
    'should return a set of tasks',
    defaultResultSetTest(() => queryTasks({}), 'id')
  )

  it('should be possible to filter by processDefinitionKey', async () => {
    const results = await queryTasks({
      processDefinitionKey: 'fl_ItemRequest',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const task of results.data) {
      expect(task.processDefinitionId).to.match(/^fl_ItemRequest:/)
    }
  })

  it('should be possible to filter by a variable', async () => {
    const results = await queryTasks({
      processInstanceVariables: [
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
    queryTasks,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
