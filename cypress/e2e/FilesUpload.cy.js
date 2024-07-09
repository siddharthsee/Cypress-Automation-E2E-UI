import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe('File Upload',()=>{

    it.only('Single File Upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('img2.jpeg')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')


    })


    it('Rename and upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'img2.jpeg',fileName:'sid.pdf'})
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

     })


     it('Drag and Drop Upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Ajit.pdf',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Ajit.pdf')
        

     })

     it('Multiple File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/mootools-upload.php')
        cy.get('#file').attachFile(['Ajit.pdf','img2.jpeg','siddharth.jpeg'])
        cy.get("input[value='Upload']").click()
        //cy.get('.progress').should('be.visible')


     })

     it('Shadow Dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('[class="smart-browse-input"]',{includeShadowDom:true}).attachFile(['Ajit.pdf','siddharth.jpeg'])
        cy.get('[class="smart-item-name"]',{includeShadowDom:true}).contains('Ajit.pdf')
        cy.get('[class="smart-upload-all-button success smart-element smart-button"]',{includeShadowDom:true}).click()



     })






})