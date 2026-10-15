Feature: User Profile
  As a logged-in admin user
  I want to manage my profile
  So that my account information is accurate and up to date

  Scenario: edit profile
    Given Admin has logged in with username "demo" and password "demo"
    And Admin has navigated to the profile page
    When Admin edits the profile with following fields:
      | field        | value        |
      | name         | Ram Bhandari |
      | phone        |   9856033333 |
      | organization | Abbal        |
    Then Admin should see their updated information on the profile page:
      | field        | value        |
      | name         | Ram Bhandari |
      | phone        |   9856033333 |
      | organization | Abbal        |
    And Admin should see their initials in the profile picture
    And Admin should not be able to save the profile again
