describe("Test File Upload via webdriveruni", () => {
    it("Upload a file", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})

        cy.get('#myFile').selectFile("cypress/fixtures/image.png")
        cy.get('#submit-button').click()
    }) 
    
    it("Upload no file", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})
        cy.get('#submit-button').click()

    }) 
    
})