Feature: Create Project
  As a user
  I want to create a new project
  So that I can manage my works

  Scenario: Create a new project
    Given the user with email "demo" and password "demo" has logged in to the dashboard
    When the user creates a project with name "Demo"
    Then the project "Demo" should be visible in the dashboard
