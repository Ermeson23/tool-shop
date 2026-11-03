import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });
    
    test('Deve logar com sucesso com credenciais válidas', async () => {
        await loginPage.login(process.env.USER_EMAIL ?? '', process.env.USER_PASSWORD ?? '');

        await expect(loginPage.page).toHaveURL('account');
    });

    test('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', async () => {
        await loginPage.login('wrongtestemail@gmail.com', 'wrongpassword');

        await expect(loginPage.errorMessage).toBeVisible();

        await expect(loginPage.errorMessage)
            .toHaveText('Invalid email or password');
    });
});