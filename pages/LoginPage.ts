import { Page, expect } from "@playwright/test";
import * as dotenv from 'dotenv';
import LoginPageObj from "./LoginPageObj";
dotenv.config();

export default class LoginPage {

  private page:Page;
  private locators:LoginPageObj;
  constructor (aPage:Page){
    this.page=aPage;
    this.locators = new LoginPageObj(aPage);
  }
    async load() {
      await this.page.goto(process.env.URL || "");
    }

  async login() {

    //Variables de usuario
    let user_login: string = process.env.USER || "";
    let password_login: string = process.env.PASSWORD || "";

    //Ingresamos a la URL
    await this.load();

    //Proceso de logueo
    await this.page.fill(this.locators.getuserInput() , user_login);
    await this.page.fill(this.locators.getpasswordInput(), password_login);
    await this.page.click(this.locators.getloginButton());

    //Validación logueo correcto
    //const userLoged = this.locators.getUserNameLoged(this.page);
    //const text = await userLoged.innerText();
    //console.log(text);
    //console.log(user_login);
    //await expect(userLoged,"El perfil del usuario no se encuentra visible").toBeVisible();
    //await expect(userLoged,"El nombre de usuario no es el esperado").toHaveText(user_login);

  }

}