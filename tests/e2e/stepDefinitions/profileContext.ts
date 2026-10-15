import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ProfilePage } from '../pageObjects/ProfilePage';
import type {DataTable} from '@cucumber/cucumber';
import { getExpectedInitials } from '../../utils/getExpectedInitials';

Given('Admin has navigated to the profile page', async function (){
  const profilePage = new ProfilePage(this.page);
  await profilePage.navigate();
});

When('Admin edits the profile with following fields:', async function (dataTable: DataTable){
  const profilePage = new ProfilePage(this.page);
  const data = dataTable.rowsHash();
  await profilePage.editProfile(data.name, data.phone, data.organization);
});

Then('Admin should see their updated information on the profile page:', async function (dataTable: DataTable){
  const profilePage = new ProfilePage(this.page);
  const data = dataTable.rowsHash();
  const profileInfo = await profilePage.getProfileInformation();
  expect(profileInfo.name).toBe(data.name);
  expect(profileInfo.phone).toBe(data.phone);
  expect(profileInfo.organization).toBe(data.organization);
});

Then('Admin should see their initials in the profile picture', async function (){
  const profilePage = new ProfilePage(this.page);
  const { name } = await profilePage.getProfileInformation();
  await expect(profilePage.profileAvatarInitials).toHaveText(
    getExpectedInitials(name)
  );
});

Then('Admin should not be able to save the profile again', async function (){
  const profilePage = new ProfilePage(this.page);
  expect( await profilePage.canProfileBeSaved()).toBe(false);
});
