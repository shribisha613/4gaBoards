import { Locator, Page } from "@playwright/test";

export class CardPage {
  public readonly page: Page;
  public readonly boardTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boardTitle = this.page.locator('[class*="BoardActions_title"]');
  }

  public getBoardTitle(): Locator {
    return this.boardTitle;
  }
}
