/// <reference types ="cypress" />


// Additional Login 
describe('Submit Review', () => {
    before(() => {
        cy.visit("/")
        cy.get(".authorization-link").first().click()
        cy.get("#email").type("qusaiali@gmail.com")
        cy.get("#pass").first().type("qusaiali@1234")
        cy.get("#send2").first().click()
    })


    it('Validate that the user can submit a review on the product page', () => {
        cy.visit("/")
        cy.contains("a", "Argus All-Weather Tank").click()
        cy.get("#tab-label-reviews-title").click()
        cy.get(".review-field-ratings .review-control-vote .radio").eq("4").check({ force: true })
        cy.wait(3000)
        cy.get("#summary_field").type("high quality")
        cy.get("#review_field").type("this is product is very nice colors")
        cy.get(".review-form-actions .submit").click()
        cy.wait(3000)
        cy.get(".page .messages").should("contain", "You submitted your review for moderation.")
        cy.get(".logged-in").first().should("contain", "Welcome, qusaiaa ali!")
    })



})