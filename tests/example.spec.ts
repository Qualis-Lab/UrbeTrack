import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Regresión Urbetrack', ()=>{
  
  test('Logueo Correcto', async ({ page }) => {
    const loginPage = new LoginPage();
  
    await loginPage.login(page);
  });

});



