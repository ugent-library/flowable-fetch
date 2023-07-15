import { describe, it, expect } from 'vitest'

import { listProcessInstances } from './list-process-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listProcessInstances() method', () => {
  it(
    'should return a set of process instances',
    defaultResultSetTest(
      listProcessInstances,
      'id',
      (i) => expect(i).to.have.property('ended').to.be.false
    )
  )
})
