import { listProcessDefinitions } from './list-process-definitions'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listProcessDefinitions() method', () => {
  it(
    'should return a set of process defintions',
    defaultResultSetTest(listProcessDefinitions, 'name')
  )
})
