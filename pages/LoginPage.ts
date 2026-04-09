import { Page, expect } from '@playwright/test';

export class LoginInfoPage {
  constructor(private page: Page) { }

  async verifyErrorMsgVisible() {
    await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible();
  }

  async verifyLoggedIn() {
    await expect(this.page.locator('text=Logged in as')).toContainText('Logged in as');
  }

  async logout() {
    await this.page.getByRole('link', { name: ' Logout' }).click();
  }
}