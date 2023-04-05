export class SideMenuComponent {
  constructor(private page) {}

  paymentLink = this.page.getByRole('link', { name: 'płatności' });
}
