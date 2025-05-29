class ListOfProductsPage {

    // locators
    readonly header = () => cy.contains("h1", "Products List");
    readonly buttonWithName = (buttonName: string) => cy.contains('button', buttonName);
    readonly searchByInput = (searchPlaceholder: string) => cy.get('input[placeholder="Search by ' + searchPlaceholder + '"]');
    readonly tableHeader = () => cy.get('.el-table__header-wrapper');
    readonly tableRow = () => cy.get('.el-table__row');


    //methods
    verifyTableHeader(expectedColumns: string[]) {
        this.tableHeader().find('th').should('have.length', expectedColumns.length)
            .each(($th, idx) => {
                // for each header cell, assert it has the exact text
                cy.wrap($th).should('have.text', expectedColumns[idx]);
            });
    }

    verifyTableColumnListWithProductsOnExpectedIndex(expectedColumnIndexToCheck: number, expectedValue: string) {
        this.tableRow()
            .each(($tr) => {
                // for each row, assert it has the exact text
                // note that the table index starts from 0
                cy.wrap($tr).find('td').eq(expectedColumnIndexToCheck - 1).should('have.text', expectedValue);
            });
    }
}

const listOfProductsPage = new ListOfProductsPage();
export default listOfProductsPage