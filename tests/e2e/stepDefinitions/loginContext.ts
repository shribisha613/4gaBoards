import { Given, When } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { expect, Page } from '@playwright/test';

async function login(this: { page: Page }, identifier: string, password: string): Promise<void> {
  await new LoginPage(this.page).login(identifier, password);
}

Given('the user has navigated to the login page', async function (): Promise<void> {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await expect(loginPage.getIdentifierField()).toBeVisible();
});

When('the user logs in with {string} and {string}', login);
When('the user logs in with email {string} and password {string}', login);
