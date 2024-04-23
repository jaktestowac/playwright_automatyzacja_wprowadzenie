import { Page } from '@playwright/test';
import { SideMenuComponent } from '../component/side-menu.component';

export class PulpitPage {
  constructor(private page: Page) {}

  sideMenuComponent = new SideMenuComponent(this.page);

  transferReceiverInput = this.page.locator('#widget_1_transfer_receiver');
  transferAmountInput = this.page.locator('#widget_1_transfer_amount');
  transferTitleInput = this.page.locator('#widget_1_transfer_title');

  transferButton = this.page.getByRole('button', { name: 'wykonaj' });
  actionCloseButton = this.page.getByTestId('close-button');

  messageText = this.page.locator('#show_messages');

  topUpReceiverInput = this.page.locator('#widget_1_topup_receiver');
  topUpAmountInput = this.page.locator('#widget_1_topup_amount');
  topUpAgreementCheckbox = this.page.locator(
    '#uniform-widget_1_topup_agreement span'
  );
  topUpExecuteButton = this.page.getByRole('button', {
    name: 'doładuj telefon',
  });

  moneyValueText = this.page.locator('#money_value');
  userNameText = this.page.getByTestId('user-name');

  async executeQuickPayment(
    receiverId: string,
    transferAmount: string,
    transferTitle: string
  ): Promise<void> {
    await this.transferReceiverInput.selectOption(receiverId);
    await this.transferAmountInput.fill(transferAmount);
    await this.transferTitleInput.fill(transferTitle);

    await this.transferButton.click();
    await this.actionCloseButton.click();
  }

  async executeMobileTopUp(
    topUpReceiver: string,
    topUpAmount: string
  ): Promise<void> {
    await this.topUpReceiverInput.selectOption(topUpReceiver);
    await this.topUpAmountInput.fill(topUpAmount);
    await this.topUpAgreementCheckbox.click();

    await this.topUpExecuteButton.click();
    await this.actionCloseButton.click();
  }
}
