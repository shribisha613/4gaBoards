import { DashboardPage } from '../pageObjects/DashboardPage';
import { expect } from '@playwright/test';
import { Then } from '@cucumber/cucumber';

Then('the user should be navigated to the dashboard', async function (): Promise<void> {
  const dashboardPage = new DashboardPage(this.page);
  await expect(dashboardPage.dashboardTitle).toBeVisible();
});
