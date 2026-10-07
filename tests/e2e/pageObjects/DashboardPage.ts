import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  public readonly page: Page;
  public readonly dashboardTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardTitle = this.page.getByText('Dashboard', { exact: true });
  }
}
