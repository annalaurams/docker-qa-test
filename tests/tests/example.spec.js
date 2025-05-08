import { test, expect } from '@playwright/test';

const nome = 'Ana Maria';
const idade = 30;
const email = 'ana.maria@teste.com';

test.describe('Cadastro de Usuários', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page.locator('text=Cadastrar')).toBeVisible();
  });

  test('Deve cadastrar um novo usuário e exibi-lo na lista', async ({ page }) => {
    await page.locator('input[placeholder="Nome"]').fill(nome);
    await page.locator('input[placeholder="Idade"]').fill(idade.toString());
    await page.locator('input[placeholder="Email"]').fill(email);

    await page.locator('text=Cadastrar').click();

    const card = page.locator('.card', { hasText: email });
    await expect(card).toContainText(nome);
    await expect(card).toContainText(idade.toString());
    await expect(card).toContainText(email);
  });

  test('Deve exibir erro se idade for negativa', async ({ page }) => {
    await page.locator('input[placeholder="Nome"]').fill(nome);
    await page.locator('input[placeholder="Idade"]').fill('-5');
    await page.locator('input[placeholder="Email"]').fill(email);

    await page.locator('text=Cadastrar').click();

    await expect(page.locator('text=Idade é obrigatória')).toBeVisible();
  });

  test('Deve exibir erro se campos estiverem vazios', async ({ page }) => {
    await page.locator('text=Cadastrar').click();

    await expect(page.locator('text=Nome é obrigatório')).toBeVisible();
    await expect(page.locator('text=Email é obrigatório')).toBeVisible();
    await expect(page.locator('text=Idade é obrigatória')).toBeVisible();
  });

});
