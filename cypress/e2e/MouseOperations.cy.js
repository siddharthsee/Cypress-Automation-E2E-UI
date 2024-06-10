import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Various Mouse Actions',()=>{

 it('Mouse Hover',()=>{

    cy.visit('https://demo-opencart.com/')
    cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('not.be.visible')

    cy.get(".nav-link.dropdown-toggle[href='https://demo-opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger('mouseover').click()

   cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible')

 })

     it('Right Click',()=>{

       cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
       cy.get('li[class="context-menu-item context-menu-icon context-menu-icon-copy"]').should('not.be.visible')

       cy.get('[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
       cy.get('li[class="context-menu-item context-menu-icon context-menu-icon-copy"]').should('be.visible')


   })
   it('Double Click',()=>{
      cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
      cy.frameLoaded("#iframeResult")
      //cy.get('#iframeResult')

      cy.iframe("#iframeResult").find('button[ondblclick="myFunction()"]').dblclick()
      cy.iframe("#iframeResult").find('#field2').should('have.value','Hello World!')


   })

   it('Drag & Drop',()=>{
    cy.visit('http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html')
    cy.get('body > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6)').should('be.visible')
    cy.get('#box106').should('be.visible')
    cy.get('body > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6)').drag('#box106',{force:true})


   })

   it.only('Scrolling the Page',()=>{
    cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
    cy.get("img[src='/img/flags/small/tn_fj-flag.gif']").scrollIntoView({duration:2000})
    cy.get("img[src='/img/flags/small/tn_fj-flag.gif']").should('be.visible')
    cy.get('[class="navbar-header"]').scrollIntoView({duration:2000})
    cy.get('[class="footerlinks"]').scrollIntoView({duration:2000})
    





   })





})