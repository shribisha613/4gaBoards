Feature: Board and Card Management
  As a project member
  I want to create a new board and add cards to it
  So that I can track my project tasks

  Scenario: Create a board and add a card to it
    Given the user has logged in with email "demo@demo.demo" and password "demo"
    When the user creates a board with following details:
      | name       | project         | template          |
      | New Board  | Getting started | marketingCampaign |
    Then the board "New Board" should be visible in the dashboard
    When the user creates card with name "First Task"
    Then the card "First Task" should be visible in the board
