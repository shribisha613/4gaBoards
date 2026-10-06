import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  public readonly page: Page;
  public readonly dashboardTitle: Locator;
  public readonly dashboardAddProjectBtn: Locator;
  public readonly addProjectNameField: Locator;
  public readonly addProjectBtn: Locator;
  public readonly projectTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardTitle = this.page.locator('div[title="Dashboard"]');
    this.dashboardAddProjectBtn = this.page.locator('//div[contains(@class, "Sidebar_sidebar__x32HG")]//button[contains(@title, "Add Project")]');
    this.addProjectNameField = this.page.getByRole("textbox", {name: "Enter project name..."});
    this.addProjectBtn = this.page.getByRole('dialog').getByRole('button', { name: 'Add Project' })
    this.projectTitle = this.page.locator('//div[contains(@class, "Header_title__l+wMf")]');
  }

  public async getDashboardTitle(): Promise<string | null> {
    return this.dashboardTitle.textContent();
  }

  public async openAddProjectPopup(): Promise<void> {
    await this.dashboardAddProjectBtn.click();
  }

  public async createProject(name: string): Promise<void> {
    await this.addProjectNameField.fill(name);
    await this.addProjectBtn.click();
  }
}
