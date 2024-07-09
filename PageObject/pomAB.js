class Register{

    visit(url){
        cy.visit(url)
    }


    firstname(name){
        cy.get('[name="firstname"]').type(name)
    }



    lastname(lname){
        cy.get('[name="lastname"]').type(lname)
    }


    email(em){
        cy.get('[name="email"]').type(em)
    }

    
    telephone(tele){
        cy.get('[name="telephone"]').type(tele)
    }


    password(pass){
        cy.get('[name="password"]').type(pass)
    }


    confirmPassword(pass){
        cy.get('[name="confirm"]').type(pass)
     }


    subscribe(){
        cy.get('[name="newsletter"][value="1"]').check()
    }


    agree(){
        cy.get('[name="agree"]').check()
    }


    submit(){
        cy.get('[type="submit"]').click()
    }

    verify(){
        return cy.get('h1')   //.should('have.contain','Your Account')
    }

}

export default Register;