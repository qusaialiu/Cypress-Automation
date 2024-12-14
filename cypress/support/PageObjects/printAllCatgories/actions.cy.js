class PrintAllCategories {
    OpenHomePage() {
        cy.visit("/")
    }
    ClickonWhatsNew() {
        cy.get("#ui-id-3").click()
    }

}
export default PrintAllCategories;