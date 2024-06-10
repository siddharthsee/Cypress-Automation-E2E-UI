import 'cypress-iframe'

describe('Alerts',()=>{
    it.only('iframe',()=>{
      cy.visit('https://the-internet.herokuapp.com/iframe')
      cy.frameLoaded("#mce_0_ifr")
      cy.iframe("#mce_0_ifr").type('HELLO')
      


    })
    it('Parent & Child window',()=>{
        // cy.visit('https://the-internet.herokuapp.com/windows')
        // cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        // cy.url().should('have.include','https://the-internet.herokuapp.com/windows/new')  //Assertion
        // cy.wait(5000);
        // cy.go('back')

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(2000)
        cy.go('back')
        

    })

 it('Normal Alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsAlert()']").click()
    //Assertion
    cy.on('window:alert',(t)=>{
        expect(t).to.contain('I am a JS Alert')
    })

    //closing assertion
    cy.get('#result').should('contain','You successfully clicked an alert')

 })


 it('Confirmation Alert for ok',()=>{

   cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   cy.get("button[onclick='jsConfirm()']").click()

   cy.on('window:confirm',(t)=>{
      expect(t).to.contain('I am a JS Confirm')
   })

   cy.get('#result').should('have.text','You clicked: Ok')



 })
 it('Confirmation Alert for Cancel',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
 
    cy.on('window:confirm',(t)=>{
       expect(t).to.contain('I am a JS Confirm')
    })

    cy.on('window:confirm',()=>false)
 
    cy.get('#result').should('have.text','You clicked: Cancel')
 
 
 
  })
  it('Prompt Alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((t)=>{
        cy.stub(t,'prompt').returns('Hello')
    })

    cy.get("button[onclick='jsPrompt()']").click()
    //cy.on('window:prompt',()=>false)
    cy.get('#result').should('contain','You entered: Hello') 
  })

  it('Authentication Alert',()=>{
     
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:'admin',password:'admin'}})
    cy.get("div[class='example'] p").should('have.contain','Congratulations!')

  })
 








})