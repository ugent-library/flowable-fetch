import { describe, it } from 'vitest'

import { listProcessDefinitions } from './list-process-definitions'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The listProcessDefinitions() method', () => {
  it(
    'should return a set of process definitions',
    defaultResultSetTest(listProcessDefinitions, 'name')
  )

  rejectionTest(
    listProcessDefinitions,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
