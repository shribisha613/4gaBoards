import { Given, When } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';

Given('{string} has navigated to the login page', async function (_user: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('{string} logs in with email {string} and password {string}', async function (_user: string, email: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});
