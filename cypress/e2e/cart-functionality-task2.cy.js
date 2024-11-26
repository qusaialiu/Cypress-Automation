/// <reference types ="cypress" />
describe('Cart Functionalities', () => {

    before(() => {
        cy.log("this is before")

    })
    beforeEach(() => {
        cy.visit("/")
        cy.get("#search").type("shirt" + "{enter}")
        cy.contains("a", "Radiant Tee").click()
        cy.get("#option-label-size-143-item-167").click()
        cy.get("#option-label-color-93-item-56").first().click()
        cy.get("#qty").clear().type("2")
        cy.get("#product-addtocart-button").click()
        cy.wait(3000)

    })
    it('Validate that the user can add product to cart', () => {

        cy.get(".page .messages").first().should("contain", "You added Radiant Tee to your")
        cy.get(".counter-number").should("be.visible")
        cy.get(".counter-number").should("contain", "2")
    });

    it('Validate that the user can delete product', () => {
        cy.get(".showcart").click()
        cy.get("[title='Remove item']").click()
        cy.get(".action-accept").click()
        cy.get(".counter-number").should("be.hidden")


    })
    it('Validate that the user can update product', () => {
        cy.get(".showcart").click()
        cy.get("[title='Edit item']").click()
        cy.get(".swatch-option ").contains("L").click()
        cy.get("[aria-label=Blue]").click()
        cy.get("#qty").clear().type("3")
        cy.get("#product-updatecart-button").click()
        cy.wait(3000)
        cy.get(".counter-number").should("be.visible").and("contain", "3")
        cy.get(".page .messages").first().should("contain", "Radiant Tee was updated in your shopping cart.")

    })



    after(() => {
        cy.log("this is after all hook")
    })

    afterEach(() => {
        cy.log("This is after Each hook")
    })

})