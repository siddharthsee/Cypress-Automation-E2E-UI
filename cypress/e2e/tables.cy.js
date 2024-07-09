describe("Tables",()=>{
    beforeEach('Login-Password',()=>{

        cy.visit('https://demo-opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').type('demo')      
        cy.get('#input-password').type('demo')  
        cy.get("button[type='submit']").click()
        cy.get('button[class="btn-close"]').click()
    //     cy.get('#input-username').should('have.text','demo')  //Assertion--(not able to apply)
    //     cy.get('#input-password').should('have.text','demo')
    //    cy.url().contains('https://demo-opencart.com/admin/index.php?route=common/dashboard&user_token=3d2b24a6a6385a917af071bca0bf134a')

       //contains-->contain
       cy.get(".parent.collapsed[href='#collapse-5']").click()
       cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()    
    })

    it('Check No of rows & cols',()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
    
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')


    })

    it('Check particular cell data',()=>{

         cy.get('tbody tr:nth-child(4) td:nth-child(4)').should('contain','Default')
    })


    it.only('Read all data from rows & cols in 1ST Page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,i,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,i,$cols)=>{
                    cy.log($col.text())
                })
            })
        })


    })











})