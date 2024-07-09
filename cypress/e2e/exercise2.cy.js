

describe('Test suite',()=>{

    it('login verification',()=>{
        cy.visit('http://automationexercise.com')
       // cy.get('.active > :nth-child(1) > h1').contains('Automation')
       cy.get('[src="/static/images/home/logo.png"]').should('be.visible')
        cy.get("a[href='/login']").click({force:true})
        cy.get("div[class='login-form'] h2").should('have.text','Login to your account')
        cy.get("input[data-qa='login-email']").type('chai@gmail.com')
        cy.get("input[placeholder='Password']").type('123456')
        cy.get('[type="submit"][data-qa="login-button"]').click()
        cy.get('li:nth-child(10) a:nth-child(1)').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('be.visible')
        
        





        



    })






})