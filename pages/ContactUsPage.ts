import { Page, expect } from '@playwright/test';


export class ContactUsPage {
  constructor(private page: Page) { }

  async Contactusclick() {
    
    await this.page.getByRole('link', { name: ' Contact us' }).click();
  }
  async Validatecontactus() {
    await expect(this.page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  }
  async AddcontactusDetails(name: string, email: string, subject: string, message: string) {
    await this.page.fill('[data-qa="name"]', name);
    await this.page.fill('[data-qa="email"]', email);
    await this.page.fill('[data-qa="subject"]', subject);
    await this.page.fill('[data-qa="message"]', message);

  }
  async UploadFile(filePath: string) {
    // await this.page.getByRole('button', { name: 'Choose File' }).click();
    await this.page.setInputFiles('input[type="file"]', filePath);
  }
  async ClickSubmit() {
    this.page.once('dialog', async (dialog) => {
      console.log(dialog.message()); // success msg
      await dialog.accept(); // OK click
    });
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
  async VarifySubmitMSG() {
    await expect(this.page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();
  }
}