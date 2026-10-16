import { expect, Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class AccountPage {
  public readonly page: Page;
  public readonly url: string;
  public readonly heading: Locator;
  public readonly editUsernameField: Locator;
  public readonly editEmailField: Locator;
  public readonly newUsernameField: Locator;
  public readonly newEmailField: Locator;
  public readonly currentPasswordField: Locator;
  public readonly saveBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = `${BASE_URL}/settings/account`;
    this.heading = this.page.getByRole('heading', {name: "Account", exact: true});
    this.editUsernameField = this.page.getByRole('button', {name: 'Edit Username'});
    this.editEmailField = this.page.getByRole('button', {name: 'Edit Email'});
    this.currentPasswordField = this.page.locator('input[name="currentPassword"]');
    this.newUsernameField = this.page.locator('input[name="username"]');
    this.newEmailField = this.page.locator('input[name="email"]');
    this.saveBtn = this.page.getByRole('button', {name:"Save"});
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async updateUsername(username: string, password: string): Promise<void> {
    // to open Edit Username popup box
    await this.editUsernameField.click();

    // fill username and password
    await this.newUsernameField.fill(username);
    await this.currentPasswordField.fill(password);
    await this.saveBtn.click();
  }

  public async updateEmail(username: string, password: string): Promise<void> {
    // to open Edit Email popup box
    await this.editEmailField.click();

    // fill email and password
    await this.newEmailField.fill(username);
    await this.currentPasswordField.fill(password);
    await this.saveBtn.click();
  }

  public getUsername(username: string): Locator {
    return this.page.getByText(username, {exact: true});
  }

  public getEmail(email: string): Locator {
    return this.page.getByText(email, {exact: true});
  }

}
