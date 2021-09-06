const playwright = require('playwright');
import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('Form Content Renders', async () => {
    const browserList = ['chromium'];

    for (const browserType of browserList) {
      const browser = await playwright[browserType].launch({ headless: false });
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('http://localhost:9091/');

      // defining selectors
      const head = await page.$eval('css=h1', el => el.textContent);
      const label = await page.$eval('css=label', el => el.textContent);
      const button = await page.$eval('css=button', el => el.textContent);

      // verifying elements exist
      expect(await page.title()).toEqual(
        'playwright with react + typescript + webpack'
      );
      expect(head).toEqual('Please Submit the Form');
      expect(label).toEqual('Username');
      expect(button).toEqual('submit');

      // taking screenshot before closing browser
      await page.screenshot({
        path: `playwright/screenshots/smoke-${browserType}-${new Date().valueOf()}.png`
      });

      await browser.close();
    }
  });
});
