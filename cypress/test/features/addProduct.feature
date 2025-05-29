@regression
@add_product
Feature: Add product

  Background:
    Given I open the List Of Products page
    And I should see an "Add Product" button
    When I click the "Add Product" button on List of Products page
    Then dialog appears with the title "Add Product"

  Scenario: user can open the Add Product dialog
    Then dialog contains the following labels:
      | Manufacturer    |
      | Substance Name  |
      | Brand Name      |
      | Product Numbers |
    And dialog contains the following inputs:
      | Manufacturer   |
      | SubstanceName  |
      | BrandName      |
      | ProductNumbers |
    And dialog contains the following buttons:
      | Cancel |
      | Add    |

  @bug @skip
  #expected "Add button" should stay disabled until All required fields (Manufacturer, Substance name) are filled
  #actual "Add button" become enabled when user fills only Manufacturer
  Scenario: user can get button “Add” enabled only when required fields are filled
    Then the "Add" button is disabled
    When I fill in the "Manufacturer" input field with "Manufacturer 1"
    Then the "Add" button is disabled
    And I fill in the "SubstanceName" input field with "Substance name 1"
    Then the "Add" button becomes enabled

  # the BE service is mocked so it will return some dummy project, so I disabled the last check for created object
  Scenario: user can successfully add a new product with only all required fields added
    When I fill in the "Manufacturer" input field with "Manufacturer 123"
    And I fill in the "SubstanceName" input field with "Substance name 123"
    Then the "Add" button becomes enabled
    When I click the "Add" button in dialog
    Then the dialog closes
    When I enter "Manufacturer 123" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Manufacturer = "Manufacturer 123"
#    And The table should only show products where Substance Name = "Substance name 123"

  # the BE service is mocked so it will return some dummy project, so I disabled the last checks for created object
  Scenario: user can successfully add a new product with all fields added
    When I fill in the "Manufacturer" input field with "Manufacturer 123"
    And I fill in the "SubstanceName" input field with "Substance name 123"
    And I fill in the "BrandName" input field with "Brand name 123"
    And I fill in the "ProductNumbers" input field with "Product numbers 123"
    And I click the "Add" button in dialog
    Then the dialog closes
    When I enter "Manufacturer 123" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Manufacturer = "Manufacturer 123"
#    And The table should only show products where Substance Name = "Substance name 123"
#    And The table should only show products where Product Numbers = "Product Numbers 123"
#    And The table should only show products where Brand Name = "Brand name 123"


  @skip
    #service is mocked, so it still return project,
  #in real it should be empty list and message "no products were found, matching search criteria"
  Scenario: user can click Cancel button during adding a product, product will not be created
    When I fill in the "Manufacturer" input field with "Manufacturer 123"
    And I click the "Cancel" button in dialog
    Then the dialog closes
    When I enter "Manufacturer 123" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table with project should be empty, message with "no products were found, matching search criteria" appears

  @skip
    #service is mocked, so it still return project,
  #in real it should be empty list and message "no products were found, matching search criteria"
  Scenario: user can press Escape button during adding a product, product will not be created
    When I fill in the "Manufacturer" input field with "Manufacturer 123"
    And I press "Escape" key
    Then the dialog closes
    When I enter "Manufacturer 123" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table with project should be empty, message with "no products were found, matching search criteria" appears

  @skip
    #service is mocked, so it still return project,
  #in real it should be empty list and message "no products were found, matching search criteria"
  Scenario: user can press "x" button during adding a product, product will not be created
    When I fill in the "Manufacturer" input field with "Manufacturer 123"
    And I click the X button in dialog
    Then the dialog closes
    When I enter "Manufacturer 123" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table with project should be empty, message with "no products were found, matching search criteria" appears


  Scenario: user can't enter more than max length in Manufacturer, error with message will appear
    When I type 50 characters into the "SubstanceName" field
    And I type 51 characters into the "Manufacturer" field
    Then I see a validation message "Max 50 characters" in the "Manufacturer" field
    Then the "Add" button is disabled

  Scenario: user can't enter more than max length in Substance name, error with message will appear
    When I type 50 characters into the "Manufacturer" field
    And I type 51 characters into the "SubstanceName" field
    Then I see a validation message "Max 50 characters" in the "SubstanceName" field
    And the "Add" button is disabled

  #this needs to be clarified: in requirements there is 1000, not 999 set as max value
  Scenario: user can't enter more than max length in Brand name, error with message will appear
    When I type 50 characters into the "Manufacturer" field
    And I type 50 characters into the "SubstanceName" field
    And I type 1001 characters into the "ProductNumbers" field
    Then I see a validation message "Max 999 characters" in the "ProductNumbers" field
    And the "Add" button is disabled