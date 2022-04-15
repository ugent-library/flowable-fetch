import { listTasks } from './list-tasks'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listTasks() method', () => {
  it('should return a set of tasks', defaultResultSetTest(listTasks, 'id'))
})
