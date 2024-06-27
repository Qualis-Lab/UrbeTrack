import { Page, expect } from "@playwright/test";
import SanidadPageObj from "./SanidadPageObj";
import * as dotenv from 'dotenv';
dotenv.config();

export default class SanidadPage {
  
    private locators: SanidadPageObj;
    constructor(aPage: Page) {
        //this.page = aPage;
        this.locators = new SanidadPageObj(aPage);
    }

    async load(page: Page) {
    let namePage:string = 'Servicios de higiene urbana';
    const pageElement = this.locators.getNamePage(page);

        await page.goto(process.env.URL_SANIDAD || "");

        await page.waitForSelector(this.locators.getNamePageSection(), { timeout: 5000 });
        await expect(pageElement,"El nombre de la página es el esperado: "+namePage).toHaveText(namePage);
    }


    


}