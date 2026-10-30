import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class LoginPage {
  private readonly page: Page;
  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly loginBtn: Locator;
  private readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = `${BASE_URL}/login`;
    this.emailField = this.page.locator('input[name="emailOrUsername"]');
    this.passwordField = this.page.locator('input[name="password"]');
    this.loginBtn = this.page.getByRole('button', { name: 'Log in' });
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async login(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }

  public getUrl(): string {
    return this.url;
  }

  public getEmailField(): Locator {
    return this.emailField;
  }
}
