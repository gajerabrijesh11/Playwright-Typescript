import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductdetailPage } from '../pages/ProductDetailsPage';

test('Product Details Test', async ({ page }) => {
    const home = new HomePage(page);
    const productdetailpage = new ProductdetailPage(page);

    await home.navigate();
    await home.verifyHomePageVisible();
    await productdetailpage.Productsclick();
    await productdetailpage.ValidateAllproductpage();
    await productdetailpage.OpenproductDetailspage();
    await productdetailpage.Validateproductdetailpage();
    await productdetailpage.Validateproductdetails();
} )