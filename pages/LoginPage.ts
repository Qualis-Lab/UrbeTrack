import { Page, expect } from "@playwright/test";
import LoginPageObj from "./LoginPageObj";
import * as dotenv from 'dotenv';
dotenv.config();


export default class LoginPage {
  

  //private page:Page;
  private locators:LoginPageObj;
  constructor (aPage:Page){
    this.locators = new LoginPageObj(aPage);
  }
    async load(page: Page) {
      await page.goto(process.env.URL || "");
    }

  async login(page) {
  /**
   * Proceso de logueo
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
    //Variables de usuario
    let user_login: string = process.env.USER || "";
    let password_login: string = process.env.PASSWORD || "";

    //Ingresamos a la URL
    await this.load(page);
    await page.goto(process.env.URL || "");

    //Proceso de logueo
    await page.fill(this.locators.getuserInput() , user_login);
    await page.fill(this.locators.getpasswordInput(), password_login);
    await page.click(this.locators.getloginButton());
  }

  async validateLoginOK(page: Page) {
    //Validación logueo correcto
    const userLoged = this.locators.getUserNameLoged(page);
    let user_login: string = process.env.USER || "";
    await page.waitForSelector(this.locators.getuserLoged(), { timeout: 10000 });
    //console.log(text);
    //console.log(user_login);
    await expect(userLoged,"El perfil del usuariose encuentra visible").toBeVisible();
    await expect(userLoged,"El nombre de usuario es el esperado: "+user_login).toHaveText(user_login);
  }

}