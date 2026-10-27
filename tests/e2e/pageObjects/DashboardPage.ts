import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';
export class DashboardPage {
  public readonly dashboardTitle: Locator;
  public readonly projectTitle: Locator;
  public readonly url: string;
  private readonly dashboardAddProjectBtn: Locator;
  private readonly page: Page;
  private readonly addProjectNameField: Locator;
  private readonly addProjectBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = `${BASE_URL}/`;
    this.dashboardTitle = this.page.getByText('Dashboard', { exact: true });
    this.dashboardAddProjectBtn = this.page.locator('//div[contains(@class, "Sidebar_sidebar__x32HG")]//button[contains(@title, "Add Project")]');
    this.addProjectNameField = this.page.getByRole('textbox', { name: 'Enter project name...' });
    this.addProjectBtn = this.page.getByRole('dialog').getByRole('button', { name: 'Add Project' });
    this.projectTitle = this.page.locator('//div[contains(@class, "Header_title__l+wMf")]');
  }

  public async openAddProjectPopup(): Promise<void> {
    await this.dashboardAddProjectBtn.click();
  }

  public async createProject(name: string): Promise<void> {
    await this.addProjectNameField.fill(name);
    await this.addProjectBtn.click();
  }
}
