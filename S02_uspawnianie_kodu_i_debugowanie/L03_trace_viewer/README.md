# Test Automation training from jaktestowac.pl

This is a Test Automation project based on `Playwright` and `TypeScript`. The tested page is a simple demo of a bank.

## Links

- course https://jaktestowac.pl/course/playwright-wprowadzenie/
- test site https://demo-bank.vercel.app/  
  if link is broken check https://jaktestowac.pl/lesson/pw1s01l01/
- code repository https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie

## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run Trace Viewer on zip file  
  `npx playwright show-trace trace.zip`

### Updating Playwright

- check if Playwright should be updated  
  `npm outdated @playwright/test`
- update Playwright  
  `npm i @playwright/test`
- update browsers  
  `npx playwright install`
- verify Playwright version  
  `npx @playwright/test --version`

## Visual Studio Code

### Functions

- Preview: for README.md
- Autosave: in File -> Auto Save
- Timeline: file context menu -> Open Timeline
- Formatting: editor -> context menu -> Format Document
- Searching: editor -> <kbd>CTRL</kbd> + <kbd>F</kbd>
- Accept hint in editor: <kbd>Enter</kbd>
- Comment/Uncomment: <kbd>Ctrl</kbd> + <kbd>/</kbd>
- Duplicate line: <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>
- Use more than one terminal: <kbd>+</kbd> button in TERMINAL
- Cancelling Node process: hit twice <kbd>Ctrl</kbd> + <kbd>C</kbd>
- Extract to variable: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>
- Move line i.e. up: <kbd>Alt</kbd> + <kbd>↑</kbd>
- Show autocomplete suggestion: <kbd>Ctrl</kbd> + <kbd>Spacebar</kbd>
- Creating a new variable: Refactor <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> -> Extract to constant in enclosing scope

## Extensions

- GitLens - view details of your repository i.e. commits history
- Prettier - default formatter for editor

## Playwright

### Playwright Config modifications

- config file `playwright.config.ts`
- disable browsers, i.e. Firefox
  ```javascript
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox'],
  //   },
  // },
  ```
- enable video on fail
  ```javascript
  use: {
      video: {'retain-on-failure'},
  },
  ```
- enable Trace Viewer on fail
  ```javascript
  use: {
      trace: {'retain-on-failure'},
  },
  ```

### Playwright snippets

- import:
  ```typescript
  import { test, expect } from '@playwright/test';
  ```
- test:
  ```typescript
  test('test description', async ({ page }) => {
    //your code
  });
  ```
- describe:
  ```typescript
  test.describe('Group description', () => {
    //your code
  });
  ```
- running given test: `test.only`

### Locators

- `getByTestId` i.e. `getByTestId('login-input')` for element with `data-testid="login-input"`
- `getByRole` i.e. `getByRole('button', { name: 'wykonaj' })`
- `locator` i.e. `locator('#some-id')` (with `css` selector) for element with attribute `id="some-id"`

## Other

### Chrome

- use English version!
- open DevTools <kbd>F12</kbd> or right click `Inspect`
- get selector: right click on element -> Copy -> Copy selector
- testing CSS selectors in Console: `$$('selector')`

### Prettier

- install Prettier  
  `npm install --save-dev --save-exact prettier`
- configure Prettier

  - exlude files in `.prettierignore`

    ```
    package-lock.json
    playwright-report
    test-results

    ```

  - set rules in `.prettierrc.json`
    ```
    {
        "singleQuote": true
    }
    ```

- run Prettier  
  `npx prettier --write .`
- additionaly you can install VSC extension: **Prettier**
