import { Page } from '@playwright/test';
import { SideMenuComponent } from '../component/side-menu.component';

export class PaymentPage {
  constructor(private page: Page) {}

  sideMenuComponent = new SideMenuComponent(this.page);

  transferReceiverInput = this.page.getByTestId('transfer_receiver');
  transferToInput = this.page.getByTestId('form_account_to');
  transferAmountInput = this.page.getByTestId('form_amount');

  transferButton = this.page.getByRole('button', { name: 'wykonaj przelew' });
  actionCloseButton = this.page.getByTestId('close-button');

  messageText = this.page.locator('#show_messages');

  async makeTransfer(transferReceiver: string, transferAccount: string, transferAmount: string): Promise<void> {
    await this.transferReceiverInput.fill(transferReceiver);
    await this.transferToInput.fill(transferAccount);
    await this.transferAmountInput.fill(transferAmount);

    await this.transferButton.click();
    await this.actionCloseButton.click();
  }
}
