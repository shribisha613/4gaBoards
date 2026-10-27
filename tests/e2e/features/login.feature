Feature: Login
  As a user
  I want to log in to the dashboard
  So that I can manage my projects

  Scenario: Admin logs in with valid credentials
    Given the user has navigated to the login page
    When the user logs in with email "demo@demo.demo" and password "demo"
    Then the user should be navigated to the dashboard

  Scenario: Registered user logs in with valid credentials
    Given the user has been registered with email "grace@gmail.com" and password "Grace@123"
    And the user has logged out
    When the user logs in with email "grace@gmail.com" and password "Grace@123"
    Then the user should be navigated to the dashboard
