const { Before, BeforeAll, AfterAll, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');
require('dotenv').config();

setDefaultTimeout(30000);

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: process.env.HEADLESS === 'true',
    slowMo: 1000,
  });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  this.browser = browser;
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  try {
    if (process.env.CI === 'true' && scenario.result?.status === Status.FAILED) {
      const resultsDir = path.join(process.cwd(), 'test-results');
      await fs.mkdir(resultsDir, { recursive: true });
      const safeName = scenario.pickle.name.replace(/[^a-z0-9_-]/gi, '_').slice(0, 100);
      const screenshotPath = path.join(resultsDir,`${safeName}-${Date.now()}.png`);
      await this.page.screenshot({path: screenshotPath, fullPage: true});
      console.log(`Failure screenshot saved: ${screenshotPath}`);
    }
  } catch (error) {
      console.error('Error saving screenshot:', error);
  } finally {
    await this.page.close();
    await this.context.close();
  }
});
