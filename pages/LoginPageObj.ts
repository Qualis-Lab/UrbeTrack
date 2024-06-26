import { Page } from "@playwright/test";

export default class LoginPage {
    private  page:Page;
    constructor (aPage:Page){
      this.page=aPage;
    }

    getuserInput() {
        return '[name="txtUsuario"]'
      }
       getpasswordInput() {
        return '[name="txtPassword"]';
      }
    
       getloginButton() {
        return '[name="btLogin"]';
      }
    
       getuserLoged() {
        return '[id="ctl00_lblUserName"]';
      }
    
      getUserNameLoged(apage: Page) {
        return apage.locator(this.getuserLoged())
      }
}