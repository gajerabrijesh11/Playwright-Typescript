import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async verifySignupVisible() {
    await expect(this.page.locator('text=New User Signup!')).toBeVisible();
  }

  async enterNameEmail(name: string, email: string) {
    await this.page.fill('[data-qa="signup-name"]', name);
    await this.page.fill('[data-qa="signup-email"]', email);
  }

  async clickSignup() {
    await this.page.click('[data-qa="signup-button"]');
  }
}