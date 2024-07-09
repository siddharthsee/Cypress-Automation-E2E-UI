describe('Practice Page',()=>{
  it('Dynamic dropdown',()=>{
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').click().type('cypress automation')
    cy.get('.wM6W7d').should('have.length',13)
    cy.get('.wM6W7d').contains('interview questions').click()
    cy.get('#APjFqb').should('have.value','cypress automation interview questions')
  })


  it.skip('Auto-Suggestion dropdown',()=>{
    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').click().type('Delhi')
    cy.get('.suggestion-link').contains('Delhi University').click()
  })

   it.skip('Advanced-Dropdown',()=>{
     cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
     cy.get('#select2-billing_country-container').click().type('Iran{Enter}') 

      cy.get('#select2-billing_country-container').should('have.text','Iran')    //Assertion


   }) 
   it.skip('Zoho-Dropdown',()=>{
            cy.visit('https://www.zoho.com/commerce/free-demo.html')
            cy.get('#zcf_address_country').select('Haiti').should('have.value','Haiti')
        })

  it.skip('Radio button',()=>{
      cy.visit('https://testautomationpractice.blogspot.com/')
      //visibility
      cy.get('#male').should('be.visible')
      cy.get('#female').should('be.visible')
      //Selection
      cy.get('#female').check().should('be.checked')
      cy.get('#male').check().should('be.checked')
      

    //   cy.get('#female').uncheck().should('not.be.checked')
    //   cy.get('#male').uncheck().should('not.be.checked')

    

        cy.get('#sunday').should('be.visible')
        cy.get('#monday').should('be.visible')
        cy.get('#sunday').check().should('be.checked')
        cy.get('#monday').check().should('be.checked')
        cy.get('#sunday').uncheck().should('not.be.checked')
        cy.get('#monday').uncheck().should('not.be.checked')
        //cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')


        //Dropdown- Practice 

       


    


  })












})