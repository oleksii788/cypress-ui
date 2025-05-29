import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import addProductDialog from "../../pages/addProductDialog";
import {generateRandomString} from "./utils";

When(/^I fill in the "([^"]*)" input field with "([^"]*)"$/, (inputName: string, textValue: string) => {
    addProductDialog.inputWithName(inputName).type(textValue);
});

When(/^I type (\d+) characters into the "([^"]*)" field$/, (symbolsCount: number, inputName: string) => {
    addProductDialog.inputWithName(inputName).type(generateRandomString(symbolsCount));
});

Then(/^I see a validation message "([^"]*)" in the "([^"]*)" field$/, (messageText: string, fieldName: string) => {
    addProductDialog.validationMessage(fieldName).should('have.text', messageText);
});