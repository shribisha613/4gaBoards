import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ProfilePage } from '../pageObjects/ProfilePage';
import type {DataTable} from '@cucumber/cucumber';

Given('the user has navigated to the profile page', async function (): Promise<void> {
  const profilePage = new ProfilePage(this.page);
  await profilePage.navigate();
});

When('the user edits the profile with the following fields:', async function (dataTable: DataTable): Promise<void> {
  const profilePage = new ProfilePage(this.page);
  const data = dataTable.rowsHash();
  await profilePage.editProfile(data.name, data.phone, data.organization);
});

Then('these information should be shown on the profile page:', async function (dataTable: DataTable): Promise<void> {
  const profilePage = new ProfilePage(this.page);
  const data = dataTable.rowsHash();
  const profileInfo = await profilePage.getProfileInformation();
  expect(profileInfo.name).toBe(data.name);
  expect(profileInfo.phone).toBe(data.phone);
  expect(profileInfo.organization).toBe(data.organization);
});

Then('the profile picture should consist of the initials {string}', async function (initials: string  ): Promise<void> {
  const profilePage = new ProfilePage(this.page);
  await expect(profilePage.profileAvatarInitials).toHaveText(initials);
});

Then('the user should not be able to save the profile', async function (): Promise<void> {
  const profilePage = new ProfilePage(this.page);
  expect( await profilePage.canProfileBeSaved()).toBe(false);
});
