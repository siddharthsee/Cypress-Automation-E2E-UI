describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('messi')
    cy.contains('Google Search').click()
    
    cy.get('.DoxwDb > .PZPZlf').contains('Lionel Messi')
    
  })
})