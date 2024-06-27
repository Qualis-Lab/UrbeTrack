import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import SanidadPage from '../pages/SanidadPage';
import * as dotenv from 'dotenv';
dotenv.config();

test("Regresión completa Urbetrack", async ({ page }) => {
  await test.step('logueo', async () => {
    const loginPage = new LoginPage(page);

    await loginPage.login(page);
    await loginPage.validateLoginOK(page);
  });

  await test.step('Configuración de sanidad', async () => {
    const sanidadPage = new SanidadPage(page);
    await sanidadPage.load(page);
  });


})



  