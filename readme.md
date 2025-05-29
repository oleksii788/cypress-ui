#### The interactive Cypress Test Runner in Chrome.

- ``` npm run cypress:runner ```

#### Executes all feature specs in headless mode.

- ``` npm run cypress:execution ```

Runs only scenarios tagged @Regression.

- ```npm run cypress:execution-tags --tags @Regression```

Runs the suite with Allure enabled (outputs JSON results to allure-results/).

- ``` npm run cypress:execution-allure ```

Deletes previous Allure results, report, and screenshots.

- ``` npm run allure:clear ```

Generates the HTML Allure report from allure-results/.

- ``` npm run allure:report ```

Preserves allure-results/history across report regenerations.

- ``` npm run allure:history ```