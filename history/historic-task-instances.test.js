import { listHistoricTaskInstances } from './historic-task-instances'
import defaultResultSetTest from '../test-utils/default-resultset-test'

describe('The listHistoricTaskInstances() method', () => {
  it(
    'should return a set of task instances',
    defaultResultSetTest(listHistoricTaskInstances, 'taskInstanceId')
  )

  it('should be possible to filter by taskDefinitionKey', async () => {
    const results = await listHistoricTaskInstances({
      taskDefinitionKey: 'ScanArticle1',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const taskInstance of results.data) {
      expect(taskInstance.taskDefinitionKey).to.equal('ScanArticle1')
    }
  })

  it('should be possible to filter by processDefinitionKey', async () => {
    const results = await listHistoricTaskInstances({
      processDefinitionKey: 'fl_ItemRequest',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const taskInstance of results.data) {
      expect(taskInstance.processDefinitionId).to.match(/^fl_ItemRequest\:/)
    }
  })

  it('should be possible to filter by processInstanceId', async () => {
    const results = await listHistoricTaskInstances({
      processInstanceId: '21435889',
    })

    expect(results).to.have.property('data').with.lengthOf(10)

    for (const taskInstance of results.data) {
      expect(taskInstance.processInstanceId).to.equal('21435889')
    }
  })
})
