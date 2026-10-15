import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { AccountPage } from '../pageObjects/AccountPage';
import { expect } from '@playwright/test';

Given('the admin has logged in with email {string} and password {string}', async function(email: string, password: string): Promise<void> {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
  await loginPage.login(email, password);
});

Given('the admin has navigated to account settings page', async function(): Promise<void> {
  const accountPage = new AccountPage(this.page);
  await accountPage.navigate();

  await expect(this.page).toHaveURL(accountPage.url);
  await expect(accountPage.heading).toBeVisible();
});

When('the admin changes the account details with following data:', async function(dataTable: DataTable): Promise<void> {
  const accountPage = new AccountPage(this.page);
  const {username, email, password} = dataTable.hashes()[0];

  await accountPage.updateUsername(username, password);
  await accountPage.updateEmail(email, password);
});

Then('the account details should be updated with following data:', async function (dataTable: DataTable): Promise<void> {
  const accountPage = new AccountPage(this.page);
  const {username, email} = dataTable.hashes()[0];

  await expect(accountPage.getUsername(username)).toHaveText(username);
  await expect(accountPage.getUsername(email)).toHaveText(email);
});
