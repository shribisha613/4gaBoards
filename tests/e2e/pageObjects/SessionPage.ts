import { Locator, Page } from '@playwright/test';

export class SessionPage {
  private readonly page: Page;
  private readonly logOutBtn: Locator;
  private readonly profileBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileBtn = this.page.getByTitle('Profile and Settings');
    this.logOutBtn = this.page.getByRole('button', { name: 'Log Out' });
  }

  public async logOut() {
    await this.profileBtn.click();
    await this.logOutBtn.click();
  }
}
