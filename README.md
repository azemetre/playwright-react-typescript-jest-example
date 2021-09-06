# Playwright vs Cypress

This is a PoC for [Playwright](https://playwright.dev/docs/why-playwright) vs [Cypress](https://www.cypress.io/) a simple React TS app.

## Table of contents

* [Setup](#Setup)
* [Playwright](#Playwright)
* [Cypress](#Cypress)
* [CI Test Results](#CI_Test_Results)

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

The tests are under `./playwright`.

In a new tab inside your terminal, run the tests with the following command:

```bash
npm run playwright
```


To execute tests with debugger, use [Playwright Inspector](https://playwright.dev/docs/inspector/).

  ```bash
  PWDEBUG=1 npm run playwright
  ```

> Playwright executes specs in parallel, this is why you see browsers launching simultaneously.

> The tests are headed for your visibility. To execute tests headlessly, remove `` from `launch()` functions at the spec files. In Playwright this is controlled at test level, and headless is the default. [Reference](https://playwright.dev/docs/debug#run-in-headed-mode).

<br></br>

## [Cypress](#Cypress)

The tests are under `./cypress/integration`.

To start the test runner:

```bash
npm run cypress:open
```

To run headlessly:

```bash
npm run cypress:run
```

<br></br>

## [CI Test results](#CI-Test-results)

[Cypress Dashboard](https://dashboard.cypress.io/projects/mwqojo) - uses 3 parallel machines.

[Github Actions](https://github.com/muratkeremozcan/playwright-vs-cypress/actions)
