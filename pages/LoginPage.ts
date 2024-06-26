import { Page, expect } from "@playwright/test";
import * as dotenv from 'dotenv';
dotenv.config();

export default class LoginPage {


  private get userInput() {
    return '[name="txtUsuario"]'
  }
  private get passwordInput() {
    return '[name="txtPassword"]';
  }

  private get loginButton() {
    return '[name="btLogin"]';
  }

  private get userLoged() {
    return '[id="ctl00_lblUserName"]';
  }

  getUserNameLoged(page: Page) {
    return page.locator(this.userLoged)
  }


  async load(page: Page) {
    await page.goto(process.env.URL || "");
  }

  async login(page: Page) {

    //Variables de usuario
    let user_login: string = process.env.USER || "";
    let password_login: string = process.env.PASSWORD || "";

    //Ingresamos a la URL
    await this.load(page);

    //Proceso de logueo
    await page.fill(this.userInput, user_login);
    await page.fill(this.passwordInput, password_login);
    await page.click(this.loginButton);

    //Validación logueo correcto
    //const userLoged = this.getUserNameLoged(page);
    //const text = await userLoged.innerText();
    //console.log(text);
    //console.log(user_login);
    //await expect(userLoged,"El perfil del usuario no se encuentra visible").toBeVisible();
    //await expect(userLoged,"El nombre de usuario no es el esperado").toHaveText(user_login);

  }

}
