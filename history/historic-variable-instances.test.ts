import { describe, it } from 'vitest'

import { listHistoricVariableInstances } from './historic-variable-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listHistoricVariableInstances() method', () => {
  it(
    'should return a set of historic variable instances',
    defaultResultSetTest(listHistoricVariableInstances, 'variableName')
  )
})
