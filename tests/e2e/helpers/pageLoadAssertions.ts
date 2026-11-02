import { expect, Locator, Page } from '@playwright/test';

export async function verifyPageLoaded(page: Page, expectedUrl: string, expectedElement: Locator): Promise<void> {
  await expect(page).toHaveURL(expectedUrl);
  await expect(expectedElement).toBeVisible();
}
