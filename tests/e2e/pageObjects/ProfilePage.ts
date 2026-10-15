import {Locator, Page} from '@playwright/test';
import {BASE_URL} from '../../utils/constants';

export class ProfilePage {
  public readonly page: Page;
  public readonly url: string;
  public readonly nameField: Locator;
  public readonly phoneField: Locator;
  public readonly organizationField: Locator;
  public readonly saveBtn: Locator;
  public readonly profileAvatarInitials: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = `${BASE_URL}/settings/profile`;
    this.nameField = this.page.locator('input[name="name"]');
    this.phoneField = this.page.locator('input[name="phone"]');
    this.organizationField = this.page.locator('input[name="organization"]');
    this.saveBtn = this.page.getByRole('button', { name: 'Save' });
    this.profileAvatarInitials = this.page.locator(
    'div[class*="ProfileSettings_avatarImage"] span[class*="User_initials"]'
  );
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async editProfile(name: string, phone: string, organization: string): Promise<void> {
    await this.nameField.fill(name);
    await this.phoneField.fill(phone);
    await this.organizationField.fill(organization);
    await this.saveBtn.click();
  }

  public async getProfileInformation(): Promise<{ name: string; phone: string; organization: string }> {
    const nameValue = await this.nameField.inputValue();
    const phoneValue = await this.phoneField.inputValue();
    const organizationValue = await this.organizationField.inputValue();
    return { name: nameValue, phone: phoneValue, organization: organizationValue };
  }

  public async canProfileBeSaved(): Promise<boolean> {
    return (await this.saveBtn.isEnabled());
  }
}
