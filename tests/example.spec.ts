import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe('Regresión Urbetrack', ()=>{
  
  test('Logueo con usuario', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.login();
    await loginPage.validateLoginOK(page);
  });

  test('Ingreso a sanidad', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.login();
  });

});



