import { DashboardPage } from '../pageObjects/DashboardPage';
import { expect } from '@playwright/test';
import { Then } from '@cucumber/cucumber';

Then('{string} should be navigated to the dashboard', async function (_user: string) {
  const dashboardPage = new DashboardPage(this.page);
  await expect(dashboardPage.dashboardTitle).toBeVisible();
});
