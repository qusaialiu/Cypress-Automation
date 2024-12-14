import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PrintAllCategories from "../../../../support/PageObjects/printAllCatgories/actions.cy";

const printallcatgories = new PrintAllCategories();

Given("The user navigate on magento website", () => {
    printallcatgories.OpenHomePage();
});

When("The user click on What's New", () => {
    printallcatgories.ClickonWhatsNew();
})

Then("The categories in the New In Womens section are available", () => {
    cy.get(".categories-menu >.items").first().then((Categories) => {
        for (let i = 0; i < Categories.length; i++) {
            cy.wrap(Categories[i]).invoke('text').then((categoriesProduct) => {
                cy.log(categoriesProduct)

                console.log(categoriesProduct)


            })
        }
    })
})