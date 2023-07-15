import { describe, it } from 'vitest'

import { listHistoricTaskInstances } from './historic-task-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listHistoricTaskInstances() method', () => {
  it(
    'should return a set of historic task instances',
    defaultResultSetTest(listHistoricTaskInstances, 'taskInstanceId')
  )
})
