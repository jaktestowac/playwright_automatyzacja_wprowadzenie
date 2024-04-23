# Test Automation training from jaktestowac.pl

This is a Test Automation project based on `Playwright` and `TypeScript`.  
The tested page is a simple demo of a bank.

- [Links](#links)
- [Commands](#commands)
- [Visual Studio Code](#visual-studio-code)
- [Extensions](#extensions)
- [Playwright](#playwright)
- [Other](#other)
- [Simple Page Object Model](#simple-page-object-model)

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
- run tests form exact file  
  `npx playwright test tests/login.spec.ts`
- run tests with selected tag `@login`  
  `npx playwright test --grep "@login"`

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
- Searching: editor -> <kbd>CTRL</kbd> + <kbd>F</kbd>
- Accept hint in editor: <kbd>Enter</kbd>
- Comment/Uncomment: <kbd>Ctrl</kbd> + <kbd>/</kbd>
- Duplicate line: <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>
- Extract to variable: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>
- Move line i.e. up: <kbd>Alt</kbd> + <kbd>↑</kbd>
- Show autocomplete suggestion: <kbd>Ctrl</kbd> + <kbd>Spacebar</kbd>
- Formatting: editor -> context menu -> Format Document
- Formatting shortcut: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>
- Format code on save:
  - Top menu: View -> Open Command Palette
  - Type: user settings - chose `Preferences: Open User Settings`
  - Search: format on save
  - Edit: check `Editor Format On Save`
- Reload Window:
  - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
  - Find and use: `Developer: Reload Window`
- Rename in opened files: <kbd>F2</kbd>
- Show quick fix: <kbd>Ctrl</kbd> + </kbd>.</kbd>
- Creating a new variable: Refactor <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> -> Extract to constant in enclosing scope

### Terminal (console)

- Open: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd>
- Cancelling Node process: hit twice <kbd>Ctrl</kbd> + <kbd>C</kbd>
- Open file: <kbd>Ctrl</kbd> + mouse click
- Autocomplete: <kbd>Tab</kbd>
- Paste in terminal shortcuts:
  - <kbd>Ctrl</kbd> + <kbd>V</kbd>
  - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>
  - <kbd>Shift</kbd> + <kbd>Insert</kbd>
  - right mouse button
- Use more than one terminal: <kbd>+</kbd> sign in TERMINAL
- Use another terminal (Git Bash, JavaScript Debug): <kbd>˅</kbd> sign in TERMINAL

To quickly evaluate code use `DEBUG CONSOLE`.

## Extensions

- GitLens - view details of your repository i.e. commits history
- Prettier - default formatter for editor
- Playwright Test for VSCode - run and record tests form VSC

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
- enable Trace Viewer on fial
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
- hook beforeEach:
  ```typescript
  test.befoerEach('async ({ page }) => {
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
        "singleQuote": true,
        "endOfLine": "auto"
    }
    ```

- run Prettier  
  `npx prettier --write .`
- additionaly you can install VSC extension: **Prettier**
  - and set default VSC formatter as Prettier (right mouse button and `Format document with ...`)

### package.json example scripts

- single command:  
  `"test": "npx playwright test",`
- command with parameters:  
  `"test:headed": "npx playwright test --headed",`
- other script with added parameters:  
  `"test:pulpit:hd" : "npm run test tests/pulpit.spec.ts -- --headed"`

Scripts can be run in standard and debug mode by:

- hovering over script name and using opition **Run**
- entering command `npm run script_name` i.e. `npm run test`
- using `NPM Scripts` tab in **Explorer** view (need to be enabled in **EXPLORER** settings)

## Simple Page Object Model

Simple implementation of Page Object Model can be based on _classes_ that represents and implements tested pages.
Those calsses contains _locators_ of elements, that are used in tests, e.g. buttons, inputs etc.

Directory structure:

```
+-- Projects
|   +-- pages
|       +-- login.page.ts
|       +-- ...
|   +-- tests
|       +-- login.spac.ts
|       +-- ...
```

### Page implementation

Simple implementation of login page in `./pages/login.page.ts`:

```
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  loginInput = this.page.getByTestId('login-input');
  passwordInput = this.page.getByTestId('password-input');
  loginButton = this.page.getByTestId('login-button');

  async login(userId: string, userPassword:string): Promise<void> {
    await this.loginInput.fill(userId)
    await this.passwordInput.fill(userPassword)
    await this.loginButton.click()
  }
}

```

#### Usage in tests

First import of selected page:

```
import { LoginPage } from '../pages/login.page';
```

Then use page in tests:

```
    // Act
    const loginPage = new LoginPage(page)
    await loginPage.login(userId, userPassword)
```
