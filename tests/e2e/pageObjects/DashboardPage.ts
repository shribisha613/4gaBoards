import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  public readonly page: Page;
  public readonly dashboardTitle: Locator;
  public readonly dashboardAddProjectBtn: Locator;
  public readonly addProjectNameField: Locator;
  public readonly addProjectBtn: Locator;
  public readonly projectTitle: Locator;
  public readonly addBoardBtn: Locator;
  public readonly boardNameField: Locator;
  public readonly selectProjectField: Locator;
  public readonly boardTemplateSelect: Locator;
  public readonly submitAddBoardBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardTitle = this.page.getByText('Dashboard', { exact: true });
    this.dashboardAddProjectBtn = this.page.getByRole('button', { name: 'Add Project' }).first();
    this.addProjectNameField = this.page.getByRole("textbox", { name: "Enter project name..." });
    this.addProjectBtn = this.page.getByRole('dialog').getByRole('button', { name: 'Add Project' });
    this.projectTitle = this.page.locator('[class*="Project_title"]');
    this.addBoardBtn = this.page.getByRole('button', { name: 'Add Board' });
    this.boardNameField = this.page.getByRole('textbox', { name: 'Enter board name...' });
    this.selectProjectField = this.page.getByRole('textbox', { name: 'Select project' });
    this.boardTemplateSelect = this.page.getByRole('textbox', { name: 'Empty' });
    this.submitAddBoardBtn = this.page.getByRole('dialog').getByRole('button', { name: 'Add Board' });
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

  public async selectProject(project: string): Promise<Locator> {
    return this.page.locator(`div[name='${project}']`);
  }

  public async selectTemplate(template: string): Promise<Locator> {
    return this.page.locator(`div[name='common.${template}']`);
  }

  public async addBoard(name: string, project: string, template: string): Promise<void> {
    await this.addBoardBtn.click();
    await this.boardNameField.fill(name);
    await this.selectProjectField.click();
    await (await this.selectProject(project)).click();
    await this.boardTemplateSelect.click();
    await (await this.selectTemplate(template)).click();
    await this.submitAddBoardBtn.click();
  }
}
