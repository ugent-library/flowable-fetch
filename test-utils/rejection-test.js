export default function rejectionTest(testCallback, expectedMessage, ...args) {
  it('should throw a parsed error message when invalid', async () => {
    await testCallback
      .call(null, ...args)
      .then(() => {
        throw new Error('Expected to fail')
      })
      .catch((error) => {
        expect(error)
          .to.be.an.instanceof(Error)
          .and.to.have.property('message', expectedMessage)
      })
  })
}
