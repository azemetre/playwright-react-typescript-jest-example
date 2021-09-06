const { webkit, devices } = require('playwright');
import { test, expect } from '@playwright/test';
const iPhone11 = devices['iPhone 11 Pro'];

test.describe('Form Tests', () => {
  test('Unable to Submit Empty Form', async () => {
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext({
      viewport: iPhone11.viewport,
      userAgent: iPhone11.userAgent
    });
    const page = await context.newPage();
    await page.goto('http://localhost:9091/');

    // action to trigger form error
    await page.click('css=button');

    // defining selectors
    const errorMsg = await page.$eval('css=p', el => el.textContent);

    // verifying elements exist
    expect(errorMsg).toEqual('a username is required');

    // screenshot of error
    await page.screenshot({
      path: `playwright/screenshots/form-submit-iPhone11-${new Date().valueOf()}.png`
    });
    await browser.close();
  });
});
