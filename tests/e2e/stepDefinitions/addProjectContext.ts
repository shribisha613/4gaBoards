import { Given, Then, When } from "@cucumber/cucumber";
import { DashboardPage } from "../pageObjects/DashboardPage";
import { expect } from "@playwright/test";
import { LoginPage } from "../pageObjects/LoginPage";

Given("the user with email {string} and password {string} has logged in to the dashboard", async function(email: string, pass: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(email, pass);
})

When("the user creates a project with name {string}", async function(title: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.openAddProjectPopup();
  await dashboardPage.createProject(title);
})

Then("the project {string} should be visible in the dashboard", async function(text: string) {
  const dashboardPage = new DashboardPage(this.page);
  const projectTitle = await dashboardPage.getProjectTitle();
  expect(projectTitle).toBe(text);
})
