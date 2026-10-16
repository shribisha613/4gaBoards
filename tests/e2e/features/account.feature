Feature: Account
  As an Admin
  I want to manage my account
  So that my account information stays up to date

  Scenario: Edit account details
    Given the admin has logged in with email "demo@gmail.com" and password "demo"
    And the admin has navigated to account settings page
    When the admin changes the account details with following data:
      | username  | email              | password |
      | jhondoe1  | jhondoe1@gmail.com | demo     |
    Then the account details should be updated with following data:
      | username  | email              |
      | jhondoe1  | jhondoe1@gmail.com |
