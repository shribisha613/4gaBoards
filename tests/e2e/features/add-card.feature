Feature: Board and Card Management
  As a project member
  I want to create a new board and add cards to it
  So that I can visually track my project tasks

  Scenario: Successfully create a board and add a card to it
    Given the user with email "demo" and password "demo" has logged in to the dashboard
    When the user creates a board with following details:
      | name       | project         | template |
      | Johne Doe  | Getting started | kanban   |
    Then the board "Johne Doe" should be visible in the dashboard
