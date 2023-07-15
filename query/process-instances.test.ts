import { describe, it } from 'vitest'

import { queryProcessInstances } from './process-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The queryProcessInstances() method', () => {
  it(
    'should return a set of process instances',
    defaultResultSetTest(() => queryProcessInstances({}), 'id')
  )
})
