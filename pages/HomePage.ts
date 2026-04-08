import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }

  async verifyHomePageVisible() {
    await expect(this.page).toHaveURL(/automationexercise/);
  }

  async clickSignupLogin() {
    await this.page.click('text=Signup / Login');
  }

  async verifyLoggedIn(username: string) {
    await expect(this.page.locator('text=Logged in as')).toContainText(username);
  }

  async clickDeleteAccount() {
    await this.page.click('text=Delete Account');
  }
}