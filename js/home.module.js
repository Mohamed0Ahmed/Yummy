/// <reference types="../@types/jquery" />

import { Data } from "./api.module.js";
import { Search } from "./search.module.js";
import { cat } from "./cat.module.js";
import { htmlContent } from "./html.module.js";
import { Area } from "./area.module.js";
import { Ingred } from "./ingredient.module.js";
import { Contact } from "./contact.module.js";


export class Home {
   constructor() {
      this.homaData();
      this.contact = new Contact();

   }
   async homaData() {
      let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
      this.api = new Data();
      this.html = new htmlContent();
      document.querySelector(".loading").classList.remove("d-none");
      let arry = await this.api.getApi(api);
      let html = this.html.homaData(arry);
      this.api.showData(html);
      this.navLinks();
   }

   navLinks() {
      this.search = new Search();
      this.cat = new cat();
      this.area = new Area();
      this.ingred = new Ingred();
      
   }
}
