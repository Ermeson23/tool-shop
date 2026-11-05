import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { UserApiHelper } from '../../src/utils/UserApiHelper';
import { UserDataFactory } from '../../src/data/UserDataFactory';

test.describe('Login', () => {
    let loginPage: LoginPage;
    let userApiHelper: UserApiHelper;

    const testUser = UserDataFactory.createNewUserData();
    const invalidUser = UserDataFactory.createInvalidLoginData();

    test.beforeEach(async ({ page, request }) => {
        loginPage = new LoginPage(page);
        userApiHelper = new UserApiHelper(request);

        await userApiHelper.createUser(testUser);
        await loginPage.goto();
    });
    
    test.afterEach(async () => {
        await userApiHelper.deleteUser(testUser.email, testUser.password);
  });
    
    test('Deve logar com sucesso com credenciais válidas', async ({ page }) => {
        await loginPage.login(testUser.email, testUser.password);

        await expect(loginPage.page).toHaveURL('account');
    });

    test('Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', async () => {
        await loginPage.login(invalidUser.email, invalidUser.password);

        await expect(loginPage.errorMessage).toBeVisible();

        await expect(loginPage.errorMessage)
            .toHaveText('Invalid email or password');
    });
});