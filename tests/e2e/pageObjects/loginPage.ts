import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class LoginPage {
  public readonly page: Page;
  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly loginBtn: Locator;
  public readonly loginUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.loginUrl = `${BASE_URL}/login`;
    this.emailField = this.page.locator('input[name="emailOrUsername"]');
    this.passwordField = this.page.locator('input[name="password"]');
    this.loginBtn = this.page.getByRole('button', { name: 'Log in' });
  }

  public async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.loginUrl);
  }

  public async login(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }
}
