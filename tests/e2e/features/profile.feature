Feature: User Profile
  As a logged-in user
  I want to manage my profile
  So that my account information is accurate and up to date

  Scenario: User edits their profile
    Given the user has logged in with email "demo@demo.demo" and password "demo"
    And the user has navigated to the profile page
    When the user edits the profile with the following fields:
      | field        | value        |
      | name         | Ram Bhandari |
      | phone        |   9856033333 |
      | organization | Abbal        |
    Then these information should be shown on the profile page:
      | field        | value        |
      | name         | Ram Bhandari |
      | phone        |   9856033333 |
      | organization | Abbal        |
    And the profile picture should consist of the initials "RB"
    And the user should not be able to save the profile
