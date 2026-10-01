import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { DashboardPage } from '../pageObjects/dashboardPage';

Given('the admin user is on login page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
  await expect(this.page).toHaveURL(loginPage.loginUrl);
});

When('the admin user logs in with email {string} and password {string}', async function (email: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});

Then('the user should be navigated to their dashboard', async function () {
  const dashboardPage = new DashboardPage(this.page);
  const dashboardTitle = await dashboardPage.getDashboardTitle();
  expect(dashboardTitle).toBe('Dashboard');
});
