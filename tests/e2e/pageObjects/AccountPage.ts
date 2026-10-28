import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class AccountPage {
  public readonly page: Page;
  public readonly url: string;
  public readonly heading: Locator;
  public readonly editUsernameFieldBtn: Locator;
  public readonly editEmailFieldBtn: Locator;
  public readonly newUsernameField: Locator;
  public readonly newEmailField: Locator;
  public readonly currentPasswordField: Locator;
  public readonly saveBtn: Locator;
  public readonly username: Locator;
  public readonly email: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = `${BASE_URL}/settings/account`;
    this.heading = this.page.getByRole('heading', {name: "Account", exact: true});
    this.editUsernameFieldBtn = this.page.getByRole('button', {name: 'Edit Username'});
    this.editEmailFieldBtn = this.page.getByRole('button', {name: 'Edit Email'});
    this.currentPasswordField = this.page.locator('input[name="currentPassword"]');
    this.newUsernameField = this.page.locator('input[name="username"]');
    this.newEmailField = this.page.locator('input[name="email"]');
    this.saveBtn = this.page.getByRole('button', {name:"Save"});
    this.username = this.page.locator('[class*="AccountSettings_username"]');
    this.email = this.page.locator('[class*="AccountSettings_emailValue"]');
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async updateUsername(username: string, password: string): Promise<void> {
    await this.editUsernameFieldBtn.click();
    await this.newUsernameField.fill(username);
    await this.currentPasswordField.fill(password);
    await this.saveBtn.click();
  }

  public async updateEmail(email: string, password: string): Promise<void> {
    await this.editEmailFieldBtn.click();
    await this.newEmailField.fill(email);
    await this.currentPasswordField.fill(password);
    await this.saveBtn.click();
  }

  public getUsername(): Locator {
    return this.username;
  }

  public getEmail(): Locator{
    return this.email;
  }



}
