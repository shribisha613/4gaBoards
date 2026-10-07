import { Locator, Page } from '@playwright/test';
import { BASE_URL } from '../../utils/constants';

export class RegisterPage {
  public readonly page: Page;
  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly termsAndConditionCheckBox: Locator;
  public readonly registerButton: Locator;
  public readonly registerUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.locator("input[name='email']");
    this.passwordField = this.page.locator("input[name='password']");
    this.termsAndConditionCheckBox = this.page.locator('input[name="policy"]');
    this.registerButton = this.page.getByRole('button', { name: 'Register' });
    this.registerUrl = `${BASE_URL}/register`;
  }

  public async navigateToRegistrationPage(): Promise<void> {
    await this.page.goto(this.registerUrl);
  }

  public async registerUser(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.termsAndConditionCheckBox.check();
    await this.registerButton.click();
  }
}
