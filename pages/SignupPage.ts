import { Page, expect } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) { }

  async verifySignupVisible() {
    await expect(this.page.locator('text=New User Signup!')).toBeVisible();
  }

  async verifyLoginVisible() {
    await expect(this.page.locator('text=Login to your account')).toBeVisible();
  }

  async enterNameEmail(name: string, email: string) {
    await this.page.fill('[data-qa="signup-name"]', name);
    await this.page.fill('[data-qa="signup-email"]', email);
  }

  async clickSignup() {
    await this.page.click('[data-qa="signup-button"]');
  }
  async Invalidemailpassword(email: string, password: string) {
    await this.page.fill('[data-qa="login-email"]', email);
    await this.page.fill('[data-qa="login-password"]', password);
  }

  async clickLogin() {
    await this.page.click('[data-qa="login-button"]');
  }

}