Feature: Login
  As a user
  I want to log in to the dashboard
  So that I can manage my projects

  Scenario Outline: Admin logs in with valid credentials
    Given the user has navigated to the login page
    When the user logs in with "<identifier>" and "<password>"
    Then the user should be navigated to the dashboard

    Examples:
      | identifier     | password |
      | demo@demo.demo | demo     |
      | demo           | demo     |

  Scenario: Registered user logs in with valid email
    Given the user has registered with email "grace@gmail.com" and password "Grace@123"
    And the user has logged out
    When the user logs in with email "grace@gmail.com" and password "Grace@123"
    Then the user should be navigated to the dashboard
