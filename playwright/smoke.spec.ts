const playwright = require('playwright');
import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('Form Content Renders', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:9091/');

    await page.mainFrame(); // needed in CI!

    expect(await page.title()).toEqual(
      'playwright with react + typescript + webpack'
      );

    const button = await page.$eval('css=button', el => el.textContent);
    const label = await page.$eval('css=label', el => el.textContent);
    const head = await page.$eval('css=h1', el => el.textContent);

    expect(head).toEqual('Please Submit the Form');
    expect(label).toEqual('Username');
    expect(button).toEqual('submit');

    await page.screenshot({
      path: `playwright/screenshots/smoke-${new Date().valueOf()}.png`
    });

    await browser.close();
  });
});
