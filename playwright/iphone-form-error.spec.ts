const { webkit, devices } = require('playwright');
import { test, expect } from '@playwright/test';
const iPhone11 = devices['iPhone 11 Pro'];

test.describe('Form Tests', () => {
  test('Unable to Submit Empty Form', async () => {
    const browser = await webkit.launch();
    const context = await browser.newContext({
      viewport: iPhone11.viewport,
      userAgent: iPhone11.userAgent
    });
    const page = await context.newPage();
    await page.goto('http://localhost:9091/');

    await page.click('css=button');

    const errorMsg = await page.$eval('css=p', el => el.textContent);

    expect(errorMsg).toEqual('a username is required');

    await page.screenshot({
      path: `playwright/screenshots/form-submit-iPhone11-${new Date().valueOf()}.png`
    });

    await browser.close();
  });
});
