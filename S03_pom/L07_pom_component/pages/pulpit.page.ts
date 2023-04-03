import { Page } from '@playwright/test';
import { SideMenuComponent } from '../component/side-menu.component';

export class PulpitPage {
  constructor(private page: Page) {}

  sideMenuComponent = new SideMenuComponent(this.page)

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
  userNameText = this.page.getByTestId('user-name')
}
