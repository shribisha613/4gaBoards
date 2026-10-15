import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { AccountPage } from '../pageObjects/AccountPage';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pageObjects/DashboardPage';
import { SessionPage } from '../pageObjects/SessionPage';

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
  const {username, email, 'current-password': password} = dataTable.hashes()[0];

  await accountPage.updateUsername(username, password);
  await accountPage.updateEmail(email, password);
});

Then('the account details should be updated with following data:', async function(dataTable: DataTable): Promise<void> {
  const accountPage = new AccountPage(this.page);
  const {username, email} = dataTable.hashes()[0];

  await expect(accountPage.getUsername()).toHaveText(username);
  await expect(accountPage.getEmail()).toHaveText(email);
});

When('the admin logs out', async function(): Promise<void>{
  const sessionPage = new SessionPage(this.page);
  const loginPage = new LoginPage(this.page);

  await sessionPage.logOut();
  await loginPage.navigateToLoginPage();
});

When('the admin logged in with email {string} and password {string}', async function(email: string, password: string): Promise<void>{
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});

Then('the admin should be navigated to the dashboard', async function(): Promise<void>{
  const dashboardPage = new DashboardPage(this.page);
  await expect(dashboardPage.dashboardTitle).toBeVisible();
});
