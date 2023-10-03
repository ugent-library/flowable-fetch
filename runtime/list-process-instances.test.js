import { listProcessInstances } from './list-process-instances'

import defaultResultSetTest from '../test-utils/default-resultset-test'
import rejectionTest from '../test-utils/rejection-test'

describe('The listProcessInstances() method', () => {
  it(
    'should return a set of process instances',
    defaultResultSetTest(
      listProcessInstances,
      'id',
      undefined,
      (i) => expect(i).to.have.property('ended').to.be.false
    )
  )

  rejectionTest(
    listProcessInstances,
    "Bad request: Value for param 'sort' is not valid, 'InvalidSortField' is not a valid property",
    { sort: 'InvalidSortField' }
  )
})
