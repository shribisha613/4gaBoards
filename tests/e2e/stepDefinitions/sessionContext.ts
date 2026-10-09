import { Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { SessionPage } from '../pageObjects/SessionPage';

Given('{string} has logged out', async function (_user: string) {
  const sessionPage = new SessionPage(this.page);
  await sessionPage.logOut();
  const loginPage = new LoginPage(this.page);
  const loginUrl = loginPage.getLoginUrl();
  await expect(this.page).toHaveURL(loginUrl);
});
