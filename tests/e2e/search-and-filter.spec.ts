import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Busca e Filtro de Produtos', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('Deve filtrar produtos ao pesquisar por nome', async () => {
        await homePage.searchProduct('Pliers');

        const count = await homePage.getProductCount();
        expect(count).toBeGreaterThan(0);

        await expect(homePage.productCards.first()).toContainText('Pliers');
    });
});