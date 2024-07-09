import Radio from "../../PageObject/rahul"
import 'cypress-iframe'


describe('rahul shetty',()=>{

    beforeEach('execute',()=>{
        let ln= new Radio()
        ln.pageVisit()
      
    })

    // it('particular r & c',()=>{ it 



    // }) 



    it.only('no of rows and cols',()=>{
        let ln= new Radio()
        ln.rowcol()
        cy.text()

        cy.get('body > div:nth-child(5) > div:nth-child(1) > fieldset:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)').contains('Learn SQL')
        cy.frameLoaded('[id="courses-iframe"]').get("div[class='nav-outer clearfix'] a[class='dropdown-toggle']").trigger('mouseover').click()
        
        cy.get("div[class='nav-outer clearfix'] a[class='dropdown-toggle']").trigger('mouseover').click()
       // cy.iframe('body > div:nth-child(5) > div:nth-child(1) > fieldset:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)').click().contains()


    })











    it('table eg',()=>{
        cy.get('[class="table-display"]>tbody').each(($row,i,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,i,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })


    

    it('practice 1',()=>{
        let ln= new Radio()
        console.log(cy.url())
    
        cy.get("input[value='radio1']").should('be.visible')
        cy.get("input[value='radio2']").should('be.visible')
        cy.get("input[value='radio3']").should('be.visible')
        ln.radioCheck1()
        ln.radioCheck2()
        ln.radioCheck3()

    })

    it('search bar',()=>{
    
        cy.get("input[type='text']#autocomplete").type('ind')
        cy.get('#ui-id-3').contains('India').click()
    })

    it('ddd',()=>{
        cy.get("#dropdown-class-example").select('Option3').should('have.value','option3')
        //cy.get("option[value='option2']").
    })
    it('new window',()=>{

    //   cy.get("#opentab").invoke('removeAttr','target').click()
    //   cy.url().should('include',"https://www.qaclickacademy.com/")
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'https://www.qaclickacademy.com/';
        }).as("popup")
    })
    cy.get('#openwindow').click()
    
    cy.get('@popup')
        .should("be.called")

        cy.url().should('eq','https://www.qaclickacademy.com/')
       
      
    })

    it('prompt alert',()=>{
       //cy.get('#name').type('Siddharth')
       // cy.get("#confirmbtn").click()
       let ln= new Radio()
       ln.alertyyy()
        cy.on('window:confirm',(r)=>{
            expect(r).to.contain('Hello Siddharth, Are you sure you want to confirm?')
            
        })
    })










})

