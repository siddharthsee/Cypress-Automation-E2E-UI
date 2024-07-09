
import Register from "../../PageObject/pomAB.js"
import example from "../fixtures/example.json"


 const ln = new Register()

describe('POM with fixtures', () => {

  it('pom new',()=>{
    //const lno = new Register()  

    ln.visit(example.url)
    ln.firstname(example.name)
    ln.lastname(example.lastname)
    ln.email(example.email)
    ln.telephone(example.telephone)
    ln.password(example.password)
    ln.confirmPassword(example.password)
    ln.subscribe()
    ln.agree()
    ln.submit()
    ln.verify().should('have.contain','Your Account')







  })



  
})


















//it('passes', () => {
  //   cy.visit('https://www.google.com/')
  //   cy.get('.gLFyf').type('messi')
  //   cy.contains('Google Search').click()
    
  //   cy.get('.DoxwDb > .PZPZlf').contains('Lionel Messi')
    
  // })