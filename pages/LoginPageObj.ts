import { Page } from "@playwright/test";

export default class LoginPageObj {
    private page: Page;
    constructor(aPage: Page) {
        this.page = aPage;
    }

    getuserInput() {
    /**
     * Returns the CSS selector for the user input field on the login page.
     *
     * @return {string} The CSS selector for the user input field.
     */
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