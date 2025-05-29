import {When} from "@badeball/cypress-cucumber-preprocessor";

When(/^I press "([^"]*)" key$/, (buttonName: string) => {
    cy.pressKey(buttonName);
});
