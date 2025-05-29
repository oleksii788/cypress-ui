@regression
@list_of_products
Feature: List of products

  Background:
    Given I open the List Of Products page

  Scenario: user can get List of Products page
    Then I see a list of "50" products
    And The list contains the columns:
      | Application Number |
      | Manufacturer Name  |
      | Substance Name     |
      | Brand Name         |
      | Product Numbers    |
    And The "Manufacturer" column header displays a search input
    And The "Brand name" column header displays a search input
    And I should see an "Add Product" button

  Scenario: user can filter the product list by Manufacturer
    When I enter "Manufacturer 1" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Manufacturer = "Manufacturer 1"

  Scenario: user can filter the product list by Brand name
    When I enter "Brand Name 2" into the "Brand name" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Brand Name = "Brand Name 2"

  #service is mocked, so it still return project,
  #in real it should be empty list and message "no products were found, matching search criteria"
  @skip
  Scenario: user can get empty product list for no matching search criteria products
    When I enter "notExist" into the "Brand name" search input
    And I click the "Search" button on List of Products page
    Then The table with project should be empty, message with "no products were found, matching search criteria" appears

  Scenario: user can clear filters to restore full list of products
    When I enter "Manufacturer 1" into the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Manufacturer = "Manufacturer 1"
    When I clear the "Manufacturer" search input
    And I click the "Search" button on List of Products page
    Then I see a list of "50" products
    When I enter "Brand name 1" into the "Brand name" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Brand Name = "Brand name 1"
    When I clear the "Brand name" search input
    And I click the "Search" button on List of Products page
    Then I see a list of "50" products

  Scenario: user can combine Manufacturer and Brand filters
    When I enter "Manufacturer 3" into the "Manufacturer" search input
    And I enter "Brand name 4" into the "Brand name" search input
    And I click the "Search" button on List of Products page
    Then The table should only show products where Manufacturer = "Manufacturer 3"
    And The table should only show products where Brand Name = "Brand name 4"