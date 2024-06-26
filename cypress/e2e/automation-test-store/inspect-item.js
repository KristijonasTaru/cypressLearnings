describe("Inspect Automation Test Store items using chain commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it.only("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            cy.log('Selected the following item: ' + itemHeaderText.text())
        })
        console.log('Test when we see this log')
    })

    it("Click on the first item using item index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper ').find('.prdocutname').eq(0).click()
        cy.log('Typical log, nothing suspicious')
    })
})
