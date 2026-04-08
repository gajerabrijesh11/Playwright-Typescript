import { Page, expect } from '@playwright/test';
import { userData } from '../test-data/user'

export class AccountInfoPage {
  constructor(private page: Page) {}

  async verifyAccountInfoVisible() {
    await expect(this.page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
  }

  async fillAccountDetails(password: string) {
    await this.page.fill('[data-qa="password"]', password);
    await this.page.selectOption('[data-qa="days"]', '10');
    await this.page.selectOption('[data-qa="months"]', '5');
    await this.page.selectOption('[data-qa="years"]', '1995');
  }

  async selectCheckboxes() {
    await this.page.check('#newsletter');
    await this.page.check('#optin');
  }

  async fillAddressDetails() {
    await this.page.fill('[data-qa="first_name"]', userData.firstName);
    await this.page.fill('[data-qa="last_name"]', userData.lastName);
    await this.page.fill('[data-qa="address"]', userData.address);
    await this.page.selectOption('[data-qa="country"]', userData.country);
    await this.page.fill('[data-qa="state"]', userData.state);
    await this.page.fill('[data-qa="city"]', userData.city);
    await this.page.fill('[data-qa="zipcode"]', userData.zipcode);
    await this.page.fill('[data-qa="mobile_number"]', userData.mobile);
  }

  async clickCreateAccount() {
    await this.page.click('[data-qa="create-account"]');
  }
}