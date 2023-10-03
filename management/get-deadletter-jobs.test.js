import { getDeadletterJobs } from './get-deadletter-jobs'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The getDeadletterJobs() method', () => {
  it(
    'should return a set of deadletter jobs',
    defaultResultSetTest(getDeadletterJobs, 'id', 0)
  )

  rejectionTest(
    getDeadletterJobs,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
