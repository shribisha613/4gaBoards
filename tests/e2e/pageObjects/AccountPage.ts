import { expect, Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class AccountPage {
  public readonly page: Page;
  public readonly accountPageUrl: string;
  public readonly editUsernameField: Locator;
  public readonly editEmailField: Locator;
  public readonly newUsernameField: Locator;
  public readonly newEmailField: Locator;
  public readonly currentPasswordField: Locator;
  public readonly saveBtn: Locator;
  public readonly userName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountPageUrl = `${BASE_URL}/settings/account`;
    this.editUsernameField = this.page.getByRole('button', {name: 'Edit Username'});
    this.editEmailField = this.page.getByRole('button', {name: 'Edit Email'});
    this.currentPasswordField = this.page.locator('input[name="currentPassword"]');
    this.newUsernameField = this.page.locator('input[name="username"]');
    this.newEmailField = this.page.locator('input[name="email"]');
    this.saveBtn = this.page.getByRole('button', {name:"Save"});
    this.userName = this.page.getByText('bardan');
  }

  public async gotoAccountPage(): Promise<void> {
    await this.page.goto(this.accountPageUrl);
  }

  public async fillUsername(username: string, password: string): Promise<void> {
    await this.editUsernameField.click();
    await this.newUsernameField.fill(username);
    await this.currentPasswordField.fill(password);
    await this.saveBtn.click();
  }

  public async fillEmail(username: string, password: string): Promise<void> {
    await this.editEmailField.click();
    await this.newEmailField.fill(username);
    await this.currentPasswordField.fill(password);
    await this.saveBtn.click();
  }

  public getUsesrname(username: string): Locator {
    return this.page.getByText(username, {exact: true});
  }

  public getEmail(email: string): Locator {
    return this.page.getByText(email, {exact: true});
  }

}
