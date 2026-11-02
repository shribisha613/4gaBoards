import { Given, When } from '@cucumber/cucumber';
import { RegisterPage } from '../pageObjects/RegisterPage';
import { verifyPageLoaded } from '../helpers/pageLoadAssertions';
import { DashboardPage } from '../pageObjects/DashboardPage';

Given('the user has navigated to the registration page', async function (): Promise<void> {
  const registerPage = new RegisterPage(this.page);
  await registerPage.navigate();
  await verifyPageLoaded(this.page, registerPage.getUrl(), registerPage.getEmailField());
});

When('the user registers with email {string} and password {string}', async function (email: string, password: string): Promise<void> {
  const registerPage = new RegisterPage(this.page);
  await registerPage.registerUser(email, password);
});

Given('the user has been registered with email {string} and password {string}', async function (email: string, password: string): Promise<void> {
  const registerPage = new RegisterPage(this.page);
  await registerPage.navigate();
  await registerPage.registerUser(email, password);
  const dashboardPage = new DashboardPage(this.page);
  await verifyPageLoaded(this.page, dashboardPage.url, dashboardPage.dashboardTitle);
});
