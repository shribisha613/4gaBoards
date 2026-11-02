import { Given, When } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage';
import { verifyPageLoaded } from '../helpers/pageLoadAssertions';

Given('the user has navigated to the login page', async function (this: { page: Page }): Promise<void> {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await verifyPageLoaded(this.page, loginPage.getUrl(), loginPage.getEmailField());
});

When('the user logs in with email {string} and password {string}', async function (this: { page: Page }, email: string, password: string): Promise<void> {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(email, password);
});

Given('the user has logged in with email {string} and password {string}', async function (this: { page: Page }, email: string, password: string): Promise<void> {
  const loginPage = new LoginPage(this.page);
  const dashboardPage = new DashboardPage(this.page);
  await loginPage.navigate();
  await loginPage.login(email, password);
  await verifyPageLoaded(this.page, dashboardPage.url, dashboardPage.dashboardTitle);
});
