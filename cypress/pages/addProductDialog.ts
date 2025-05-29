import { BaseDialog } from "./baseDialog";

class AddProductDialog extends BaseDialog {

    //locators
    readonly inputWithName = (inputName: string) => cy.get('input[data-e2e="productsAdd' + inputName + 'Input"]');
    readonly validationMessage=(inputName:string) => this.inputWithName(inputName).closest('.el-form-item').find('.el-form-item__error')

    //methods

    verifyDialogInputs(expectedInputs: string[]){
        this.dialog().within(() => {
            expectedInputs.forEach(inputName  => {
                this.inputWithName(inputName).should('be.visible');
            })
        })
    }

}
export default new AddProductDialog();