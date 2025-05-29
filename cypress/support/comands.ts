Cypress.Commands.add(
    'pressKey', (keyName: string) => {
        const keyMap: Record<string, string> = {
            Escape: '{esc}',
            Enter: '{enter}',
            Tab: '{tab}',
            Space: ' ',
            ArrowUp: '{uparrow}',
            ArrowDown: '{downarrow}',
            ArrowLeft: '{leftarrow}',
            ArrowRight: '{rightarrow}',
        };

        const sequence = keyMap[keyName] ?? keyName;

        return cy.focused().then($el => {
            if ($el.length) {
                return cy.wrap($el).type(sequence);
            } else {
                return cy.get('body').type(sequence);
            }
        });


    });

