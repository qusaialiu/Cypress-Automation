/// <reference types ="cypress" />



describe("Check Headers", () => {
    it("Verify all Headers links are visible in the Headers", () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".ng-scope .container > a").first()

        cy.get(".navbar-light .container li").eq(0)

        cy.get(".navbar-light .container li").eq(2)


    })
})
describe("Create an Account", () => {
    it("Validate the user can create an account Successfully", () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get("h1").contains("Sign up")
        cy.get("[href='#/login']").last()
        cy.get("[type=text]").type("qusai Hazaymih")
        cy.get(".form-group:nth-child(2) > input").type("qusaiali@gmail.com")
        cy.get("[type= password]").type("qusai1234")
        cy.get("[type=submit]").click()

    })
}
)
describe("Check Footer", () => {
    it("Verify all Footer links are visible in the Footer", () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".container a.logo-font ")
        cy.get(".container > span")
        cy.get(".container span")


    })
})

