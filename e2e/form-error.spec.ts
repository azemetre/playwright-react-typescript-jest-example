const playwright = require("playwright");

describe("Form Tests - all Browsers", () => {
  it("Unable to Submit Empty Form", async () => {
    // running tests on all 3 browsers
    for (const browserType of ["chromium", "firefox", "webkit"]) {
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("http://localhost:9091/");

      // screenshot prior to error
      await page.screenshot({
        path: `e2e/screenshots/form-error-not-visible-${browserType}-${new Date().valueOf()}.png`
      });

      // action to trigger form error
      await page.click("css=button");

      // defining selectors
      const errorMsg = await page.$eval("css=p", el => el.textContent);

      // verifying elements exist
      expect(errorMsg).toEqual("a username is required");

      // screenshot of error
      await page.screenshot({
        path: `e2e/screenshots/form-error-visible-${browserType}-${new Date().valueOf()}.png`
      });
      await browser.close();
    }
  }, 15000);
});
