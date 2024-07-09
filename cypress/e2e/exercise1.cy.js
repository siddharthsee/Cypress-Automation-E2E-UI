describe('exercise 1',()=>{

    it('Test 1',()=>{
        cy.visit('http://automationexercise.com')
        cy.get("div[class='item active'] span:nth-child(1)").contains('Automation')
        cy.url().should('eq','https://automationexercise.com/')
        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] h2").contains("New User Signup!")
        cy.get("input[placeholder='Name']").type('Siddharth')
        cy.get("input[data-qa='signup-email']").type('xyz@gmail.com')
        cy.get("button[data-qa='signup-button']").click({force:true})
        cy.get(':nth-child(1) > b').should('be.visible')
        cy.get('#id_gender1').check()
        cy.get('[data-qa="name"]').should('have.value','Siddharth')
        //cy.get('input[type="text"][id="email"]').type('xyz@gmail.com{force:true}')  //err
        cy.get('[data-qa="email"]').should('have.value',"xyz@gmail.com")
        cy.get('#password').type('1234')
        cy.get('[data-qa="days"]').select('26')
        cy.get('#months').select('September')
        cy.get('#years').select('2000')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#first_name').type('Siddharth')
        cy.get('#last_name').type('Kumar')
        cy.get('#company').type('Appventurez')
        cy.get('#address1').type('noida,64,A')
        cy.get('#address2').type('Patna,pin-800025')
        cy.get('#country').select('India')
        cy.get('#state').type('Uttar Pradesh')
        cy.get('#city').type('Noida')
        cy.get('#zipcode').type('800025')
        cy.get('#mobile_number').type('7484970320')
        cy.get("button[data-qa='create-account']").click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()












    })




})