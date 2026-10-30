import { DashboardPage } from '../pageObjects/DashboardPage';
import { Page } from '@playwright/test';
import { Then } from '@cucumber/cucumber';
import { verifyPageLoaded } from '../helpers/pageLoadAssertions';

Then('the user should be navigated to the dashboard', async function (this: { page: Page }): Promise<void> {
  const dashboardPage = new DashboardPage(this.page);
  await verifyPageLoaded(this.page, dashboardPage.url, dashboardPage.dashboardTitle);
});
