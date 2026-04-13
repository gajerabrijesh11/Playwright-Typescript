import { test, expect } from '../Base/baseTest';
import { HomePage } from '../pages/HomePage';
import { SearchProductsPage } from '../pages/SearchProductPage';



    test('Search Products Test', async ({ page }) => {
        const home = new HomePage(page);
        const searchproductspage = new SearchProductsPage(page);

        await home.navigate();
        await home.verifyHomePageVisible();
        await searchproductspage.Productsclick();
        await expect(page).toHaveURL('https://automationexercise.com/products');
        // await productdetailpage.ValidateAllproductpage();
        await searchproductspage.searchproduct();
        await searchproductspage.searchedproductvalidate();
        await searchproductspage.verifyProductsList();

    });
