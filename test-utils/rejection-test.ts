import { expect, it } from 'vitest'

export default function rejectionTest(
  testCallback: CallableFunction,
  expectedMessage: string,
  ...args: unknown[]
) {
  it('should throw a parsed error message when invalid', async () => {
    await testCallback(...args)
      .then(() => {
        throw new Error('Expected to fail')
      })
      .catch((error: Error) => {
        expect(error)
          .to.be.an.instanceof(Error)
          .and.to.have.property('message', expectedMessage)
      })
  })
}
