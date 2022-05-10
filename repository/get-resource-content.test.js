import { getResourceContent } from './get-resource-content.js'

describe('The getResourceContent() method', () => {
  it('should return the resource content', async () => {
    const content = await getResourceContent(
      21544693,
      'fl_PackBatch.bpmn20.xml'
    )

    expect(content).not.to.match(/^\<\?xml/)
  })
})
