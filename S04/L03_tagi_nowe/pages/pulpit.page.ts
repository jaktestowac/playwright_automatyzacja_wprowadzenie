import { Page, Locator } from '@playwright/test';
import { SideMenuComponent } from '../component/side-menu.component';

export class PulpitPage {
  transferReceiverInput: Locator;
  transferAmountInput: Locator;
  transferTitleInput: Locator;

  transferButton: Locator;
  actionCloseButton: Locator;

  messageText: Locator;

  topUpReceiverInput: Locator;
  topUpAmountInput: Locator;
  topUpAgreementCheckbox: Locator;
  topUpExecuteButton: Locator;

  moneyValueText: Locator;
  userNameText: Locator;

  sideMenuComponent: SideMenuComponent;

  constructor(private page: Page) {
    this.transferReceiverInput = this.page.locator(
      '#widget_1_transfer_receiver',
    );
    this.transferAmountInput = this.page.locator('#widget_1_transfer_amount');
    this.transferTitleInput = this.page.locator('#widget_1_transfer_title');

    this.transferButton = this.page.getByRole('button', { name: 'wykonaj' });
    this.actionCloseButton = this.page.getByTestId('close-button');

    this.messageText = this.page.locator('#show_messages');

    this.topUpReceiverInput = this.page.locator('#widget_1_topup_receiver');
    this.topUpAmountInput = this.page.locator('#widget_1_topup_amount');
    this.topUpAgreementCheckbox = this.page.locator(
      '#uniform-widget_1_topup_agreement span',
    );
    this.topUpExecuteButton = this.page.getByRole('button', {
      name: 'doładuj telefon',
    });

    this.moneyValueText = this.page.locator('#money_value');
    this.userNameText = this.page.getByTestId('user-name');

    this.sideMenuComponent = new SideMenuComponent(this.page);
  }

  async executeQuickPayment(
    receiverId: string,
    transferAmount: string,
    transferTitle: string,
  ): Promise<void> {
    await this.transferReceiverInput.selectOption(receiverId);
    await this.transferAmountInput.fill(transferAmount);
    await this.transferTitleInput.fill(transferTitle);

    await this.transferButton.click();
    await this.actionCloseButton.click();
  }

  async executeMobileTopUp(
    topUpReceiver: string,
    topUpAmount: string,
  ): Promise<void> {
    await this.topUpReceiverInput.selectOption(topUpReceiver);
    await this.topUpAmountInput.fill(topUpAmount);
    await this.topUpAgreementCheckbox.click();

    await this.topUpExecuteButton.click();
    await this.actionCloseButton.click();
  }
}
