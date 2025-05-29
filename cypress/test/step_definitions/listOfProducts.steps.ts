import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import type {DataTable} from "@badeball/cypress-cucumber-preprocessor";
import listOfProductsPage from "../../pages/listOfProductsPage";

When(/^I open the List Of Products page$/, () => {
    cy.visit("");
    listOfProductsPage.header().should("be.visible");
});

Then(/^The list contains the columns:$/, (dataTable: DataTable) => {
    listOfProductsPage.verifyTableHeader(dataTable.raw().flat());
});

Then(/^I should see an "([^"]*)" button$/, (buttonName: string) => {
    listOfProductsPage.buttonWithName(buttonName).should("be.visible");
});

Then(/^I see a list of "([^"]*)" products$/, (productsCount: number) => {
    listOfProductsPage.tableRow().should("have.length", productsCount);
});

Then(/^The "([^"]*)" column header displays a search input$/, (searchByName: string) => {
    listOfProductsPage.searchByInput(searchByName).should("be.visible");
});

When(/^I click the "([^"]*)" button on List of Products page$/, (buttonName: string) => {
    listOfProductsPage.buttonWithName(buttonName).click();
});

When(/^I enter "([^"]*)" into the "([^"]*)" search input$/, (searchText: string, searchByName: string) => {
    listOfProductsPage.searchByInput(searchByName).type(searchText);
});

Then(/^The table should only show products where Manufacturer = "([^"]*)"$/, (manufacturerName: string) => {
    listOfProductsPage.verifyTableColumnListWithProductsOnExpectedIndex(2, manufacturerName)
});

Then(/^The table should only show products where Substance Name = "([^"]*)"$/, (manufacturerName: string) => {
    listOfProductsPage.verifyTableColumnListWithProductsOnExpectedIndex(3, manufacturerName)
});

Then(/^The table should only show products where Brand Name = "([^"]*)"$/, (brandName: string) => {
    listOfProductsPage.verifyTableColumnListWithProductsOnExpectedIndex(4, brandName)
});

Then(/^The table should only show products where Product Numbers = "([^"]*)"$/, (brandName: string) => {
    listOfProductsPage.verifyTableColumnListWithProductsOnExpectedIndex(5, brandName)
});


When(/^I clear the "([^"]*)" search input$/, (searchByName: string) => {
    listOfProductsPage.searchByInput(searchByName).clear();
});

Then(/^The table with project should be empty, message with "([^"]*)" appears$/, (messageText: string) => {
    listOfProductsPage.tableRow().should('not.exist');
    // listOfProductsPage.noItemsMessage(messageText).should('be.visible');
});
