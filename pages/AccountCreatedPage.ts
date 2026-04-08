import { Page, expect } from '@playwright/test';

export class AccountCreatedPage {
  constructor(private page: Page) {}

  async verifyAccountCreated() {
    
    await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();
  }

  async clickContinue() {
    await this.page.click('[data-qa="continue-button"]');
  }

  async verifyAccountDeleted() {
    await expect(this.page.locator('text=ACCOUNT DELETED!')).toBeVisible();
  }
}