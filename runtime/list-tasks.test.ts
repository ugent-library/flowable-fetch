import { describe, it } from 'vitest'

import { listTasks } from './list-tasks'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The listTasks() method', () => {
  it('should return a set of tasks', defaultResultSetTest(listTasks, 'id'))

  rejectionTest(
    listTasks,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
