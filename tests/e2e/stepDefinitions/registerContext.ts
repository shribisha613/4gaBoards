import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { DashboardPage } from "../pageObjects/dashboardPage";

Given('the user has navigated to the registration page', async function () {
  const registerPage = new RegisterPage(this.page);
  await registerPage.navigateToRegistrationPage();
})

When('the user registers with email {string} and password {string}', async function(email: string, password: string) {
  const registerPage = new RegisterPage(this.page);
  await registerPage.registerUser(email, password);
})

Then('the user should be navigated to the dashboard page', async function() {
  const dashboardTitleRegisterPage = new DashboardPage(this.page)
  const dashboardTitle = await dashboardTitleRegisterPage.getDashboardTitle()
  expect(dashboardTitle).toBe("Dashboard");
})
