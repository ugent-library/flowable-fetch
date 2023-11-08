import { describe, it } from 'vitest'

import { getTimerJobs } from './get-timer-jobs'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The getTimerJobs() method', () => {
  it(
    'should return a set of timer jobs',
    defaultResultSetTest(getTimerJobs, 'id', -1)
  )

  rejectionTest(
    getTimerJobs,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
