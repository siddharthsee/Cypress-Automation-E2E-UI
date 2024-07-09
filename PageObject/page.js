class login{

    visiting(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    usert(u){
        cy.get("input[placeholder='Username']").type(u)


    }

    pass(p){
        cy.get("input[placeholder='Password']").type(p)


    }

    clicking(){ 
        cy.get("button[type='submit']").click()
    }


}
export default login;