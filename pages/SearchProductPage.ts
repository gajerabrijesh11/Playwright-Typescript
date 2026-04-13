import { Page, expect } from '@playwright/test';



export class SearchProductsPage {
    constructor(private page: Page) { }

    get productItems() {
        return this.page.locator('.productinfo');
    }

    async Productsclick() {
        // products pr click karavanu
        await this.page.getByRole('link', { name: ' Products' }).click();
    }


    async searchproduct() {
        await this.page.getByRole('textbox', { name: 'Search Product' }).fill('top');
        await this.page.locator('#submit_search').click();
    }

    async searchedproductvalidate() {
        await expect(this.page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
    }

    async verifyProductsList() {
        const count = await this.productItems.count();
        expect(count).toBeGreaterThan(0);
    }
}
