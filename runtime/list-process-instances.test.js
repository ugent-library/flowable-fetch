import { listProcessInstances } from './list-process-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listProcessInstances() method', () => {
  it(
    'should return a set of process instances',
    defaultResultSetTest(listProcessInstances, 'id')
  )
})
