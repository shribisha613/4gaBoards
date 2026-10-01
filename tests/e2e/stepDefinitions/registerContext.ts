import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { RegisterPage } from "../pageObjects/registerPage";

Given('the user has navigated to the registration page', async function () {
  const registerPage = new RegisterPage(this.page);
  await registerPage.goToRegistrationPage();
})

When('the user registers with email {string} and password {string}', async function(email: string, password: string) {
    const registerPage = new RegisterPage(this.page);
    await registerPage.registerUser(email, password);
})

Then('the user should be navigated to the dashboard page', async function() {
  const registerPage = new RegisterPage(this.page);
  await expect(this.page).toHaveURL(registerPage.baseUrl);
})
