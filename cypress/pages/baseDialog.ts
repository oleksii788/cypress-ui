export class BaseDialog {

    //locators
    readonly dialog = () => cy.get('.el-dialog');
    readonly title = (titleText: string) => cy.get('.el-dialog').contains('span', titleText);
    readonly buttonWithName = (buttonName: string) => cy.contains('button', buttonName);
    readonly labelInputWithName = (labelText: string) => cy.contains('label', labelText);
    readonly closeButton = () => cy.get('.el-dialog__headerbtn').contains('i', 'el-icon-close');

    //methods
    verifyDialogButtons(expectedButtons: string[]) {
        this.dialog().within(() => {
            expectedButtons.forEach(buttonName => {
                this.buttonWithName(buttonName).should('be.visible');
            })
        })
    }

    verifyDialogLabels(expectedLabels: string[]) {
        this.dialog().within(() => {
            expectedLabels.forEach(labelName => {
                this.labelInputWithName(labelName).should('be.visible');
            })
        })
    }

}

const baseDialog = new BaseDialog();
export default baseDialog;