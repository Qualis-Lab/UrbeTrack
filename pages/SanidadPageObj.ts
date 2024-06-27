import { Page } from "@playwright/test";

export default class SanidadPageObj {
    private page: Page;
    constructor(aPage: Page) {
        this.page = aPage;
    }

    getNamePageSection() {
        return '[class="navbar-text navbar-right"]';
    }

    getNamePage(apage: Page) {
        return apage.locator(this.getNamePageSection())
    }
}