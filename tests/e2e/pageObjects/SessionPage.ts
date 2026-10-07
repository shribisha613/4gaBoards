import { Locator, Page } from '@playwright/test';

export class SessionPage {
  public readonly page: Page;
  public readonly logOutBtn: Locator;
  public readonly profileBtn: Locator;

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
