import { Given, When } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';

Given('{string} has navigated to the login page', async function (_user: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

Given('Admin has logged in with username {string} and password {string}', async function (username: string, password: string){
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(username, password);
});

When('{string} logs in with email {string} and password {string}', async function (_user: string, email: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});
