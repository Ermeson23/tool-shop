import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productCards: Locator;
    readonly categoryFilter: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByTestId('search-query');
        this.searchButton = page.getByTestId('search-submit');
        this.productCards = page.locator('.card');
        this.categoryFilter = page.getByTestId('category-1');
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }

    async searchProduct(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

    async filterByCategory(): Promise<void> {
        await this.categoryFilter.check();
    }

    async getProductCount(): Promise<number> {
        await this.productCards.first().waitFor();
        return await this.productCards.count();
    }

}