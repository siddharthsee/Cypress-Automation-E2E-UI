// import login from "../PageObject/page.js" 
// class login {

import login from "../../PageObject/page"
import example from '../fixtures/example.json'

//     visiting() {
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     }
//     usert(u) {
//         cy.get("input[placeholder='Username']").type(u)
//     }

//     pass(p) {
//         cy.get("input[placeholder='Password']").type(p)
//     }

//     clicking() {
//         cy.get("button[type='submit']").click()
//     }


// }

describe('pom', () => {

    it('login through page object model', () => {

        const ln = new login()

        ln.visiting()
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        ln.usert(example.name)
        ln.pass(example.email)
        ln.clicking() 

 


    })




})