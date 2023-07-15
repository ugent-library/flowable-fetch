import { describe, it } from 'vitest'

import { listProcessDefinitions } from './list-process-definitions'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listProcessDefinitions() method', () => {
  it(
    'should return a set of process definitions',
    defaultResultSetTest(listProcessDefinitions, 'name')
  )
})
