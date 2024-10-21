import { Page, Locator } from '@playwright/test';

export class LoginPage {
  loginInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  loginError: Locator;
  passwordError: Locator;

  constructor(private page: Page) {
    this.loginInput = this.page.getByTestId('login-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByTestId('login-button');

    this.loginError = this.page.getByTestId('error-login-id');
    this.passwordError = this.page.getByTestId('error-login-password');
  }
}
