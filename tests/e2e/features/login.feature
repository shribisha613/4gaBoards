Feature: Admin Login
  As an admin user
  I want to login to admin panel
  So that I can manage my projects

  Scenario: login with valid credentials
    Given the admin user has navigated to the login page
    When the admin user logs in with email "demo" and password "demo"
    Then the admin user should be navigated to the dashboard
