import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage';

Given('the admin user has navigated to the login page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('the admin user logs in with email {string} and password {string}', async function (email: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});

Then('the admin user should be navigated to the dashboard', async function () {
  const dashboardPage = new DashboardPage(this.page);
  const dashboardTitle = await dashboardPage.getDashboardTitle();
  expect(dashboardTitle).toBe('Dashboard');
});
