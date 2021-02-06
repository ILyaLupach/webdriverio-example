describe('Hello page', () => {
  before(() => {
    browser.url('/')
  })
  it('page is open', () => {
    expect($('h2')).toBeVisible()
  })
  it('check text', () => {
    expect($('h2').getText()).toBe('hello Ilya!!!')
    browser.pause(2000)
  })
})
