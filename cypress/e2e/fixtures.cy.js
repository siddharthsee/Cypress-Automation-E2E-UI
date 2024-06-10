describe('fix',()=>{
    // it('Single Fixture',()=>{
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.fixture('eatOrange.json').then((data)=>{
    //         cy.get("input[placeholder='Username']").type(data.username)
    //         cy.get("input[placeholder='Password']").type(data.pass)
    //         cy.get("button[type='submit']").click()
    //         cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected)
 //     })

    it('multiple fix',()=>{
       
        cy.fixture('eatOrange').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.pass)
                cy.get("button[type='submit']").click()
                //cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',userdata.expected)

                if(userdata.username=='Admin' && userdata.pass=='admin123')
                    {
                        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.contain',userdata.expected)
                        cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click() //logout
                        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click()
                    }
                    else{
                        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected)
                    }




            })
        })




    })





    })





