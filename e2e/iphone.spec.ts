const { webkit, devices } = require("playwright");
const iPhone11 = devices["iPhone 11 Pro"];

describe("Form Tests - all Browsers", () => {
  it("Unable to Submit Empty Form", async () => {
    const browser = await webkit.launch();
    const context = await browser.newContext({
      viewport: iPhone11.viewport,
      userAgent: iPhone11.userAgent
    });
    const page = await context.newPage();
    await page.goto("http://localhost:9091/");

    // screenshot prior to error
    await page.screenshot({
      path: `e2e/screenshots/form-iPhone11-${new Date().valueOf()}.png`
    });

    // action to trigger form error
    await page.click("css=button");

    // defining selectors
    const errorMsg = await page.$eval("css=p", el => el.textContent);

    // verifying elements exist
    expect(errorMsg).toEqual("a username is required");

    // screenshot of error
    await page.screenshot({
      path: `e2e/screenshots/form-submit-iPhone11-${new Date().valueOf()}.png`
    });
    await browser.close();
  }, 15000);
});
