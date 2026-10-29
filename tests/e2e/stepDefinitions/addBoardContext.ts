import { DataTable, Given, Then, When } from "@cucumber/cucumber";
import { DashboardPage } from "../pageObjects/DashboardPage";
import { CardPage } from "../pageObjects/CardPage";
import { expect } from "@playwright/test";

When('the user creates a board with following details:', async function (datatable: DataTable): Promise<void> {
  const dashboardPage = new DashboardPage(this.page);
  const { name, project, template } = datatable.hashes()[0];
  await dashboardPage.addBoard(name, project, template);
});

Then('the board {string} should be visible in the dashboard', async function (title: string): Promise<void> {
  const cardPage = new CardPage(this.page);
  await expect(cardPage.getBoardTitle()).toHaveText(title);
});
