import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { AccountPage } from '../pageObjects/AccountPage';
import { expect } from '@playwright/test';

Given('{string} has logged in with email {string} and password {string}', async function(_user: string, email: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(email, password);
});

Given('the {string} has navigated to account settings page', async function(_user: string) {
  const accountPage = new AccountPage(this.page);
  await accountPage.gotoAccountPage();
});

When('the {string} changes the account details with following data:', async function(_user: string, dataTable: DataTable) {
  const accountPage = new AccountPage(this.page);
  const {username, email, password} = dataTable.hashes()[0];

  await accountPage.fillUsername(username, password);
  await accountPage.fillEmail(email, password);
});

Then('the account details should be updated with following data:', async function (dataTable: DataTable) {
  const accountPage = new AccountPage(this.page);
  const {username, email} = dataTable.hashes()[0];

  await expect(accountPage.getUsesrname(username)).toHaveText(username);
  await expect(accountPage.getUsesrname(email)).toHaveText(email);
});
