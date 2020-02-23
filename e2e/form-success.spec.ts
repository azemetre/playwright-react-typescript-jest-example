const playwright = require("playwright");

describe("Form Tests - all Browsers", () => {
  it("Unable to Submit Empty Form", async () => {
    // running tests on all 3 browsers
    for (const browserType of ["chromium", "firefox", "webkit"]) {
      const browser = await playwright[browserType].launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("http://localhost:9091/");

      // screenshot prior to submit
      await page.screenshot({
        path: `e2e/screenshots/form-before-submit-${browserType}-${new Date().valueOf()}.png`
      });

      const h1 = await page.$eval("css=h1", el => el.textContent);
      expect(h1).toEqual('Please Submit the Form');

      // evi nemeth was an expert in system admin and wrote many famous books
      // https://en.wikipedia.org/wiki/Evi_Nemeth
      const user = "evi.nemeth";

      await page.fill("css=input", user);
      await page.click("css=button");

      // screenshot of successful submit
      await page.screenshot({
        path: `e2e/screenshots/form-after-submit-${browserType}-${new Date().valueOf()}.png`
      });

      // previous h1 is a stale element, will need to re-assert the element
      expect(await page.$eval("css=h1", el => el.textContent)).toEqual('Thank you for Submitting');

      await browser.close();
    }
  }, 15000);
});
