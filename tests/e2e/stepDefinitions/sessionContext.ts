import { Given } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/LoginPage';
import { SessionPage } from '../pageObjects/SessionPage';
import { verifyPageLoaded } from '../helpers/pageLoadAssertions';

Given('the user has logged out', async function (): Promise<void> {
  const sessionPage = new SessionPage(this.page);
  await sessionPage.logOut();
  const loginPage = new LoginPage(this.page);
  await verifyPageLoaded(this.page, loginPage.getUrl(), loginPage.getEmailField());
});
