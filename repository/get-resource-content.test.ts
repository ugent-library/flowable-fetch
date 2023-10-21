import { describe, it, expect } from 'vitest'

import { getResourceContent } from './get-resource-content'

import rejectionTest from '../test-utils/rejection-test'

describe('The getResourceContent() method', () => {
  it('should return the resource content', async () => {
    const content = await getResourceContent(
      '20441957',
      'fl_DefaultRequest.bpmn20.xml'
    )

    expect(content).to.match(/^<\?xml/)
  })

  rejectionTest(
    getResourceContent,
    "Not found: Could not find a deployment with id '90441957'.",
    '90441957',
    'fl_DefaultRequest.bpmn20.xml'
  )

  rejectionTest(
    getResourceContent,
    "Not found: Could not find a resource with name 'fl_DefaultRequest.bpmn20.json' in deployment '20441957'.",
    '20441957',
    'fl_DefaultRequest.bpmn20.json'
  )
})
