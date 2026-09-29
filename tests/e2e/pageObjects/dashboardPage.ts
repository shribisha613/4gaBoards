import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  public readonly page: Page;
  public readonly dashboardTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardTitle = this.page.locator('div[title="Dashboard"]');
  }

  public async getDashboardTitle(): Promise<string | null> {
    return this.dashboardTitle.textContent();
  }
}
