declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Press a keyboard key by its human‐friendly name.
         * @example cy.pressKey('Escape')
         */
        pressKey(keyName: string): Chainable<Subject>;
    }
}