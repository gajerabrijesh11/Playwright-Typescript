import { Page, expect } from '@playwright/test';



export class ProductdetailPage {
  constructor(private page: Page) { }

  async Productsclick() {
    // products pr click karavanu
    await this.page.getByRole('link', { name: ' Products' }).click();
  }

  /* async ValidateAllproductpage() {
    // all product page ni url validate karvani
    await expect(this.page).toHaveURL('https://automationexercise.com/products');
  } */

  async OpenproductDetailspage() {
    // koe ek product pr view product pr click karavanu
    await this.page.getByRole('link', { name: ' View Product' }).nth(1).click();
  }

  async Validateproductdetailpage() {
    // product detail page ni url validate karvani
    await expect(this.page).toHaveURL(/\/product_details(\/\d+)?$/);
  }

  async Validateproductdetails() {
    // open kareli product ni details validate karavani.product name, category, price, avilability, condition, brand
    await expect(this.page.getByRole('heading', { name: 'Men Tshirt' })).toBeVisible();
    await expect(this.page.getByText('Category: Men > Tshirts')).toBeVisible();
    await expect(this.page.getByText('Rs.')).toBeVisible();
    await expect(this.page.getByText('Availability: In Stock')).toBeVisible();
    await expect(this.page.getByText('Condition: New')).toBeVisible();
    await expect(this.page.getByText('Brand: H&M')).toBeVisible();
  }
}
