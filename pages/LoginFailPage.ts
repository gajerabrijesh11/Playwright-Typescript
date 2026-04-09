import { Page, expect } from '@playwright/test';

export class LoginInfoPage {
  constructor(private page: Page) {}

  async verifyErrorMsgVisible() {
    await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible();
  }
}