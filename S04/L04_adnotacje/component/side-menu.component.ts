import { Locator, Page } from '@playwright/test';

export class SideMenuComponent {
  paymentLink: Locator;

  constructor(private page: Page) {
    this.paymentLink = this.page.getByRole('link', { name: 'płatności' });
  }
}
