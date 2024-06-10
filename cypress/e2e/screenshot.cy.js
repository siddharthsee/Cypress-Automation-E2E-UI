
describe('My First Test',()=>{
    it('test1',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.screenshot('hi webpage')

        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get('[id="content"] h2').should('have.text','Cameras').screenshot('cam')
        
    })

 
})
