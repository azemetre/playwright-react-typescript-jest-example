const playwright = require('playwright');
import { test, expect } from '@playwright/test';

test.describe('Form Tests', () => {
  test('Can submit a form when filled correctly', async () => {
      const browser = await playwright.chromium.launch({ headless: false });
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('http://localhost:9091/');

      const h1 = await page.$eval('css=h1', el => el.textContent);
      expect(h1).toEqual('Please Submit the Form');

      await page.fill('css=input', 'evi.nemeth');
      await page.click('css=button');

      expect(await page.$eval('css=h1', el => el.textContent)).toEqual('Thank you for Submitting');

      await page.screenshot({
        path: `playwright/screenshots/form-after-submit-${new Date().valueOf()}.png`
      });

      await browser.close();
  });
});
