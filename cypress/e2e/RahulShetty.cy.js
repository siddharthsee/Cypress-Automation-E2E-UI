describe('vegetables page',()=>{
    it('vegies',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".products").find(".product-name").each(($el,i,$els)=>{

            const txt= $el.find('.product-name').text()
            if(txt.includes('Cucumber - 1 Kg'))
                {
                    cy.wrap($el).find('button').click()
                }
        })




    })
})