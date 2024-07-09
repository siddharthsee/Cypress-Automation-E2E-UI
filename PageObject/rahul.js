class Radio{
     a='https://rahulshettyacademy.com/AutomationPractice/'

    pageVisit(){
        cy.visit(this.a)
    }
    radioCheck1(){

        cy.get("input[value='radio1']").click().should('be.checked')

    }

    radioCheck2(){
        cy.get("input[value='radio2']").click().should('be.checked')


    }
    radioCheck3(){
        cy.get("input[value='radio3']").check().should('be.checked')


    }

    alertyyy(){
        cy.get('#name').type('Siddharth')
        cy.get("#confirmbtn").click()
    }

    rowcol(){
        cy.get('[class="table-display"]>tbody>tr').should('have.length','11')
        cy.get('[class="table-display"]>tbody>tr>td').should('have.length','30')

    }
    
}
export default Radio