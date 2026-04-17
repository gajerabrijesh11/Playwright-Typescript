import { expect, Page } from '@playwright/test';

export class SubscriptionPage {
  constructor(private page: Page) {}

  private get footer() {
    return this.page.locator('footer');
  }

  private get subscriptionHeading() {
    return this.footer.locator('text=SUBSCRIPTION');
  }

  private get emailInput() {
    return this.footer.locator('#susbscribe_email');
  }

  private get submitButton() {
    return this.footer.locator('button[type="submit"]');
  }

  private get successMessage() {
    return this.page.locator('text=You have been successfully subscribed!');
  }

  async scrollToFooter() {
    await this.footer.scrollIntoViewIfNeeded();
  }

  async verifySubscriptionTextVisible() {
    await expect(this.subscriptionHeading).toBeVisible();
  }

  async enterEmailAndSubscribe(email: string) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }

  async verifySubscriptionSuccessMessageVisible() {
    await expect(this.successMessage).toBeVisible();
  }
}
