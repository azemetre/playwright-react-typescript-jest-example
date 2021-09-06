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

      const h1 = await page.$eval('css=h1', el => el.textContent);
      expect(h1).toEqual('Please Submit the Form');

      const user = 'evi.nemeth';

      await page.fill('css=input', user);
      await page.click('css=button');

      // screenshot of successful submit
      await page.screenshot({
        path: `playwright/screenshots/form-after-submit-${browserType}-${new Date().valueOf()}.png`
      });

      // previous h1 is a stale element, will need to re-assert the element
      expect(await page.$eval('css=h1', el => el.textContent)).toEqual('Thank you for Submitting');

      await browser.close();
    }
  });
});
