import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  transferReceiverInput = this.page.locator('transfer_receiver');
  transferAmountInput = this.page.locator('form_amount');
  transferToInput = this.page.locator('form_account_to');
  transferButton = this.page.getByRole('button', { name: 'wykonaj przelew' });

  actionCloseButton = this.page.getByTestId('close-button');

  messageText = this.page.locator('#show_messages');
}
