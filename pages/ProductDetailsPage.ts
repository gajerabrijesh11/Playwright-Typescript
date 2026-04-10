import { Page } from '@playwright/test';


export class ProductdetailPage {
  constructor(private page: Page) {}

  async Productsclick() {
    // products pr click karavanu
  }

  async ValidateAllproductpage() {
    // all product page ni url validate karvani
    // all list validate karvanu
  }

  async OpenproductDetailspage() {
    // koe ek product pr view product pr click karavanu
  }

  async Validateproductdetailpage() {
    // product detail page ni url validate karvani
  }

  async Validateproductdetails() {
    // open kareli product ni details validate karavani.product name, category, price, avilability, condition, brand
  }
}
