import { Then, When } from '@cucumber/cucumber';
import { DashboardPage } from '../pageObjects/DashboardPage';
import { expect } from '@playwright/test';

When('the user creates a project with name {string}', async function (title: string): Promise<void> {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.openAddProjectPopup();
  await dashboardPage.createProject(title);
});

Then('the project {string} should be visible in the dashboard', async function (text: string): Promise<void> {
  const dashboardPage = new DashboardPage(this.page);
  await expect(dashboardPage.projectTitle).toHaveText(text);
});
