import { listHistoricTaskInstances } from './historic-task-instances'

describe('The listHistoricTaskInstances() method', () => {
  it('should return a set of task instances', async () => {
    const results = await listHistoricTaskInstances()

    expect(results).to.have.all.keys([
      'data',
      'sort',
      'order',
      'start',
      'size',
      'total',
    ])

    expect(results).to.have.property('data').with.lengthOf(10)
    expect(results).to.have.property('sort', 'taskInstanceId')
    expect(results).to.have.property('order', 'asc')
    expect(results).to.have.property('start', 0)
    expect(results).to.have.property('size', 10)
    expect(results).to.have.property('total').above(10)
  })

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
