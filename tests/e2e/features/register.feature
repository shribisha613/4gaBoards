Feature: User Registration
  As a user
  I want to register
  So that I can login to the website

Scenario Outline: Register with valid email and password
  Given the user has navigated to the registration page
  When the user registers with email "<email>" and password "<password>"
  Then the user should be navigated to the dashboard page
  Examples:
  | email          | password           |
  | ram1@gmail.com | ram12345@gmail.com |
  | ram2@gmail.com | ram12345@gmail.com |
  | ram3@gmail.com | ram12345@gmail.com |
