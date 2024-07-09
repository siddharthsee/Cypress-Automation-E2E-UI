// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>

 Cypress.Commands.add('sidLog',(username,pass)=>{
    cy.get("input[placeholder='Username']").type(username)
    cy.get("input[placeholder='Password']").type(pass)
    cy.get("button[type='submit']").click()


 })

 Cypress.Commands.add('sidLogy',(username,pass)=>{
    cy.get("#username").type(username)
    cy.get("#password").type(pass)
    cy.get(".fa.fa-2x.fa-sign-in").click()
 })

 
 Cypress.Commands.add('clickMac',(lamad)=>{

    cy.get('a').contains(lamad).click()
 })
