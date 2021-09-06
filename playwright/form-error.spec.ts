const playwright = require('playwright');
import { test, expect } from '@playwright/test';

test.describe('Form Tests', () => {
  test('Unable to Submit Empty Form', async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:9091/');

    await page.click('css=button');

    const errorMsg = await page.$eval('css=p', el => el.textContent);

    expect(errorMsg).toEqual('a username is required');

    await page.screenshot({
      path: `playwright/screenshots/form-error-visible-${new Date().valueOf()}.png`
    });

    await browser.close();
  });
});
