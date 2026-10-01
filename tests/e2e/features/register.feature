Feature: User Registration
  As a user
  I want to register
  So that I can login to the website

  Scenario: Register a new user
    Given the user has navigated to the registration page
    When the user registers with email "ram@gmail.com" and password "ram@gmail.com"
    Then the user should be navigated to the dashboard page
