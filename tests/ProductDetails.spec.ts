import { test, expect } from '../Base/baseTest';
import { HomePage } from '../pages/HomePage';
import { ProductdetailPage } from '../pages/ProductDetailsPage';



    test('Product Details Test', async ({ page }) => {
        const home = new HomePage(page);
        const productdetailpage = new ProductdetailPage(page);

        await home.navigate();
        await home.verifyHomePageVisible();
        await productdetailpage.Productsclick();
        await expect(page).toHaveURL('https://automationexercise.com/products');
        // await productdetailpage.ValidateAllproductpage();
        await productdetailpage.OpenproductDetailspage();
        await productdetailpage.Validateproductdetailpage();
        await productdetailpage.Validateproductdetails();

    });
