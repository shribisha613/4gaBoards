import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class RegisterPage {
  private readonly page: Page;
  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly termsAndConditionCheckBox: Locator;
  private readonly registerBtn: Locator;
  private readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.locator("input[name='email']");
    this.passwordField = this.page.locator("input[name='password']");
    this.termsAndConditionCheckBox = this.page.locator('input[name="policy"]');
    this.registerBtn = this.page.getByRole('button', { name: 'Register' });
    this.url = `${BASE_URL}/register`;
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async registerUser(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.termsAndConditionCheckBox.check();
    await this.registerBtn.click();
  }

  public getUrl(): string {
    return this.url;
  }

  public getEmailField(): Locator {
    return this.emailField;
  }
}
