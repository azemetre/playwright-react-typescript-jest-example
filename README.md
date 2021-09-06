# Playwright vs Cypress comparison in a simple React Typescript app

This repo is a POC of [Playwright](https://playwright.dev/docs/why-playwright) vs [Cypress](https://www.cypress.io/)

## Table of contents

* [Setup](#Setup)
* [Playwright](#Playwright)
* [Cypress](#Cypress)

<br></br>

## [Setup](#Setup)

After cloning this repo run the following command, in the project directory, to install the project dependencies:

```bash
npm i
```

Start the app

```bash
npm start
```

<details><summary>Here is what the application looks like running:</summary>

<img src="docs/assets/app-running.gif" alt="form application running" width="600">

A form component with basic validation.

**Note:** we are using [tailwindcss media queries](https://tailwindcss.com/docs/background-color/#responsive) to change the background color of the `<sectiofbackgrounds based on viewport size, something we can declare in our tests with playwright.
</details>

### [Work around the Playwright MacOS permission issue](https://github.com/puppeteer/puppeteer/issues/4752#issuecomment-524086077)

This will prevent the dialog "*Do you want the application “Chromium.app” to accept incoming network connection?*"

Alternatively you can turn off the firewall.

<br></br>

## [Playwright](#Playwright)

In a new tab inside your terminal, run the tests with the following command:

```bash
npx playwright test
```

The Jest runner executes 4 specs in parallel. The output should look like the following:

```bash
npx playwright test                                                                           08:28:42
Using config at /Users/murat/playwright/playwright-react-typescript-jest-example/playwright.config.ts

Running 4 tests using 4 workers

  ✓  e2e/form-error.spec.ts:6:3 › Form Tests - all Browsers Unable to Submit Empty Form (4s)
  ✓  e2e/form-success.spec.ts:5:3 › Form Tests - all Browsers Unable to Submit Empty Form (4s)
  ✓  e2e/iphone.spec.ts:6:3 › Form Tests - all Browsers Unable to Submit Empty Form (703ms)
  ✓  e2e/smoke.spec.ts:5:3 › Smoke Tests - all Browsers Form Content Renders (4s)

  4 passed (5s)
```

* To execute tests with debugger, use [Playwright Inspector](https://playwright.dev/docs/inspector/).

  ```bash
  PWDEBUG=1 npx playwright test
  ```

* The tests are headed for your visibility. To execute tests headlessly, remove `{ headless: false }` from `launch()` functions at the spec files. In Playwright this is controlled at test level, and headless is the default. [Reference](https://playwright.dev/docs/debug#run-in-headed-mode).

<br></br>

## [Cypress](#Cypress)

