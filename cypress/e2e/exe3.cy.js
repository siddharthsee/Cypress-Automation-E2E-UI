//const { should } = require("chai")

describe('wrong checkup',()=>{

    it('check start',()=>{
        cy.visit('http://automationexercise.com')
        cy.get("div[class='item active'] span:nth-child(1)").should('have.contain','Automation')
        cy.contains('Signup / Login').click()
        cy.get("div[class='login-form'] h2").should('have.contain','Login to your')
        cy.get("input[data-qa='login-email']").type("sdccd@gmail.com")
        cy.get("input[placeholder='Password']").type("dddd")
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or p').should('have.contain','Your email or')






    })
})