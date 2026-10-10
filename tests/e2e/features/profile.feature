Feature: Profile
  As a logged-in user
  I want to edit my profile information
  So that my profile is uptodate

  Scenario:  edit profile
    Given the user has logged in
    And the user has navigated to the profile page
    When the user edits the profile with following fields:
    name phone organization
    Sarita 99 
