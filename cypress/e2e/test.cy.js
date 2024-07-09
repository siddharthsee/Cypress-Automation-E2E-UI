
describe('My First Test',()=>{
    it('test1',()=>{
        cy.visit("https://www.cypress.io/")
        cy.title().should('eq','Testing Frameworks for Javascript | Write, Run, Debug | Cypress')
        
    })

    // it('test2',()=>{
    //     cy.visit("https://www.google.com/")
    //     cy.title().should('eq','Gfoogle')
        
   // })
})









// it('new code ',()=>{
//     cy.visit('https://google.com')

//     cy.get('#APjFqb').type('Narendra Modi{Enter}')
//     //cy.get('.FPdoLc > center > .gNO89b').click()
//     cy.contains('News').click()
//     //cy.get('#APjFqb').type('Election News{Enter}')
//    // cy.contains('Fu').click()
//     cy.contains('Lok Sabha ele').click()
    
         
// })