import {Then, When} from "@badeball/cypress-cucumber-preprocessor";
import type {DataTable} from "@badeball/cypress-cucumber-preprocessor";
import baseDialog from "../../../pages/baseDialog";
import addProductDialog from "../../../pages/addProductDialog";

Then(/^dialog appears with the title "([^"]*)"$/, (dialogTitle: string) => {
    baseDialog.title(dialogTitle).should('be.visible');
});

Then(/^dialog contains the following labels:$/, (dataTable: DataTable) => {
    baseDialog.verifyDialogLabels(dataTable.raw().flat())
});

Then(/^dialog contains the following inputs:$/, (dataTable: DataTable) => {
    addProductDialog.verifyDialogInputs(dataTable.raw().flat())
});

Then(/^dialog contains the following buttons:$/, (dataTable: DataTable) => {
    baseDialog.verifyDialogButtons(dataTable.raw().flat())
});

Then(/^the "([^"]*)" button (?:becomes|is) disabled$/, (buttonName: string) => {
    baseDialog.buttonWithName(buttonName).should('be.disabled')
});

Then(/^the "([^"]*)" button (?:becomes|is) enabled$/, (buttonName: string) => {
    baseDialog.buttonWithName(buttonName).should('be.enabled')
});
Then(/^the dialog closes$/, () => {
    baseDialog.dialog().should('not.exist')
});

When(/^I click the "([^"]*)" button in dialog$/, (buttonName: string) => {
    baseDialog.buttonWithName(buttonName).click();
});

When(/^I click the X button in dialog$/, () => {
    baseDialog.closeButton().click();
});
