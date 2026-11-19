import { Locator, Page } from "@playwright/test";

export class BoardPage {
  private readonly page: Page;
  public readonly boardTitle: Locator;
  private readonly addCardBtn: Locator;
  private readonly cardNameField: Locator;
  private readonly confirmAddCardBtn: Locator;
  public readonly cardName: Locator;
  private readonly addBoardBtn: Locator;
  private readonly boardNameField: Locator;
  private readonly selectProjectField: Locator;
  private readonly boardTemplateSelectField: Locator;
  private readonly submitAddBoardBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boardTitle = this.page.locator('[class*="BoardActions_title"]');
    this.addCardBtn = this.page.getByRole('button', { name: 'Add Card' }).first();
    this.cardNameField = this.page.getByRole('textbox', { name: 'Enter card name... [Ctrl+Enter] - open' });
    this.confirmAddCardBtn = this.page.locator('form').getByRole('button', { name: 'Add Card' }).first();
    this.cardName = this.page.locator("[class*='Card_name']");
    this.addBoardBtn = this.page.getByRole('button', { name: 'Add Board' });
    this.boardNameField = this.page.getByRole('textbox', { name: 'Enter board name...' });
    this.selectProjectField = this.page.getByRole('textbox', { name: 'Select project' });
    this.boardTemplateSelectField = this.page.getByRole('textbox', { name: 'Empty' });
    this.submitAddBoardBtn = this.page.getByRole('dialog').getByRole('button', { name: 'Add Board' });
  }

  public async selectProject(project: string): Promise<void> {
    await this.page.locator(`div[name='${project}']`).click();
  }

  public async selectTemplate(template: string): Promise<void> {
    await this.page.locator(`div[name='common.${template}']`).click();
  }

  public async createBoard(name: string, project: string, template: string): Promise<void> {
    await this.addBoardBtn.click();
    await this.boardNameField.fill(name);
    await this.selectProjectField.click();
    await this.selectProject(project);
    await this.boardTemplateSelectField.click();
    await this.selectTemplate(template);
    await this.submitAddBoardBtn.click();
  }

  public async createCard(title: string): Promise<void> {
    await this.addCardBtn.click();
    await this.cardNameField.fill(title);
    await this.confirmAddCardBtn.click();
  }
}
