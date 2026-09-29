Feature: Admin Login
  As an admin user
  I want to login to admin panel
  So that I can manage my projects

  Scenario: login with valid credentials
    Given the admin user is on login page
    When the admin user logs in with email "demo" and password "demo"
    Then the user should be navigated to their dashboard
