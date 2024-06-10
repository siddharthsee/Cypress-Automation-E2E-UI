describe('navgation',()=>{


    it('navigate',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq','Your Store') //main page assertion

        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Cameras') //camera's assertion

        cy.go(-1)  //main page
        cy.title().should('eq','Your Store')

        cy.go(1)  //Camera's page
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        
        cy.reload()







    })
})