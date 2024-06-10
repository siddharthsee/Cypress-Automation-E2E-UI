describe('My Commands',()=>{

    it('Login Custom command',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.sidLog( "Admin","admin123")
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')




    })

    it('login',()=>{

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.sidLogy("tomsmith","SuperSecretPassword!")
        //cy.get('h2').should('have.include','Secure Area')
        cy.get('.subheader').should('have.contain','Welcome')

    })

    it.only('label waala',()=>{
        // cy.visit('https://demo.nopcommerce.com/')
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        // cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickMac('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        
    })




})