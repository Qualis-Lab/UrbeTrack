import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Regresión Urbetrack', ()=>{
  
  test('Logueo con usuario', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.login();
  });

  test('Ingreso a sanidad', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.login();
  });

});



