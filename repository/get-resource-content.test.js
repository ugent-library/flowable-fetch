import { getResourceContent } from './get-resource-content.js'

describe('The getResourceContent() method', () => {
  it('should return the resource content', async () => {
    const content = await getResourceContent(
      '20441957',
      'fl_DefaultRequest.bpmn20.xml'
    )

    expect(content).to.match(/^\<\?xml/)
  })
})
