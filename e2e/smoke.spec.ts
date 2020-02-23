const playwright = require("playwright");

describe("Smoke Tests - all Browsers", () => {
  it("Form Content Renders", async () => {
    // running tests on all 3 browsers
    for (const browserType of ["chromium", "firefox", "webkit"]) {
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("http://localhost:9091/");

      // defining selectors
      const head = await page.$eval("css=h1", el => el.textContent);
      const label = await page.$eval("css=label", el => el.textContent);
      const button = await page.$eval("css=button", el => el.textContent);

      // verifying elements exist
      expect(await page.title()).toEqual(
        "playwright with react + typescript + webpack"
      );
      expect(head).toEqual("Please Submit the Form");
      expect(label).toEqual("Username");
      expect(button).toEqual("submit");

      // taking screenshot before closing browser
      await page.screenshot({
        path: `e2e/screenshots/smoke-${browserType}-${new Date().valueOf()}.png`
      });

      await browser.close();
    }
  }, 15000);
});
