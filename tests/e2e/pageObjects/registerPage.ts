import {Locator, Page} from '@playwright/test'

export class RegisterPage {
  public readonly baseUrl: string;
  public readonly page: Page;
  public readonly emailField: Locator;
  public readonly passwordField: Locator;
  public readonly termsAndConditionCheckBox: Locator;
  public readonly registerButton: Locator;
  public readonly registerUrl: string;
  public readonly loginUrl: string;

  constructor(page: Page) {
    this.baseUrl = "http://localhost:3000/";
    this.page = page;
    this.emailField = this.page.locator("input[name='email']");
    this.passwordField = this.page.locator("input[name='password']");
    this.termsAndConditionCheckBox = this.page.locator('input[name="policy"]');
    this.registerButton = this.page.getByRole('button', {name: 'Register'});
    this.registerUrl = `${this.baseUrl}register`;
    this.loginUrl = `${this.baseUrl}login"`;
    }

    public async goToRegistrationPage(): Promise<void> {
      await this.page.goto(this.registerUrl);
    }

    public async registerUser(email:string, password:string): Promise<void> {
      await this.emailField.fill(email);
      await this.passwordField.fill(password);
      await this.termsAndConditionCheckBox.check();
      await this.registerButton.click();
    }

    public async navigateToLogin():Promise<void> {
      await this.page.goto(this.loginUrl);
    }
  }
