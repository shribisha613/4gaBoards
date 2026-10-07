Feature: Login
  As a user
  I want to log in to the dashboard
  So that I can manage my projects

  Scenario: Admin logs in with valid credentials
    Given "Admin" has navigated to the login page
    When "Admin" logs in with email "demo" and password "demo"
    Then "Admin" should be navigated to the dashboard

  Scenario: Registered user logs in with valid credentials
    Given "Grace" has been registered with email "grace@gmail.com" and password "Grace@123"
    And "Grace" has logged out
    When "Grace" logs in with email "grace@gmail.com" and password "Grace@123"
    Then "Grace" should be navigated to the dashboard
