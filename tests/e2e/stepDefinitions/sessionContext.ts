import { Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { SessionPage } from '../pageObjects/SessionPage';

Given('the user has logged out', async function (): Promise<void> {
  const sessionPage = new SessionPage(this.page);
  await sessionPage.logOut();
  const loginPage = new LoginPage(this.page);
  const loginUrl = loginPage.getUrl();
  await expect(this.page).toHaveURL(loginUrl);
});
