//const cypress= require('cypress')
//const {describe}=require('mocha')

describe('orange',()=>{

 it('Assertion check',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('contain','orange')      //assertion
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.title().should('contain','Orange')
    .and('eq','OrangeHRM')
    .and('include',"HRM")
    .and('not.contain',"yellow")

    cy.get('.orangehrm-login-branding').should('be.visible')
    .and('exist')

    //cy.xpath("/a").should('have.length','5')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("hello")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','hello')


 })


it('explicit assertion',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[type='Username']").type('Admin')
    cy.get("input[type='Password']").type('admin123')
    cy.get("button[type='submit']").click()

    let expName='RobertJeetuJeetu Fanches'

    cy.get('.oxd-userdropdown-name').then((x)=>{
        let a=x.text()
        //expect(a).to.equal(expName)
        assert.equal(a,expName)
    })
    

    
})











})