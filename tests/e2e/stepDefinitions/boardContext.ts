import { DataTable, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BoardPage } from "../pageObjects/BoardPage";

When('the user creates a board with following details:', async function (datatable: DataTable): Promise<void> {
  const boardPage = new BoardPage(this.page);
  const { name, project, template } = datatable.hashes()[0];
  await boardPage.createBoard(name, project, template);
});

Then('the board {string} should be visible in the dashboard', async function (title: string): Promise<void> {
  const boardPage = new BoardPage(this.page);
  await expect(boardPage.boardTitle).toHaveText(title);
});

When('the user creates card with name {string}', async function (title: string): Promise<void> {
  const boardPage = new BoardPage(this.page);
  await boardPage.createCard(title);
});

Then('the card {string} should be visible in the board', async function (title: string): Promise<void> {
  const boardPage = new BoardPage(this.page);
  await expect(boardPage.cardName).toHaveText(title);
});
