Feature: Account
  As an Admin
  I want to edit username and email
  So that my account information stays up to date

  Scenario: Edit account details
    Given "Admin" has logged in with email "demo" and password "demo"
    And the "Admin" has navigated to account settings page
    When the "Admin" changes the account details with following data:
      | username | email             | password |
      | jhondoe1  | jhondoe1@gmail.com | demo     |
    Then the account details should be updated with following data:
      | username | email             |
      | jhondoe1  | jhondoe1@gmail.com |
