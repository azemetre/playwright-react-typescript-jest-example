const playwright = require('playwright');
import { test, expect } from '@playwright/test';

test.describe('Form Tests', () => {
  test('Unable to Submit Empty Form', async () => {
    const browserList = ['chromium'];

    for (const browserType of browserList) {
      const browser = await playwright[browserType].launch({ headless: false });
      const context = await browser.newContext();
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
        path: `playwright/screenshots/form-error-visible-${browserType}-${new Date().valueOf()}.png`
      });
      await browser.close();
    }
  });
});
