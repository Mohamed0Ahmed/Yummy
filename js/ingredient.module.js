import { Data } from "./api.module.js";
import { htmlContent } from "./html.module.js";
export class Ingred {
   constructor() {
      this.api = new Data();
      this.html = new htmlContent();
      this.ingred();
   }
   ingred() {
      document
         .getElementById("ingred")
         .addEventListener("click", async () => {
            let api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
            document.querySelector(".loading").classList.remove("d-none");
            let data = await this.api.getApi(api);
            this.html.ingredHtml(data);
         });
   }
   ingredData() {
      document.querySelectorAll(".ingred").forEach((item) => {
         item.addEventListener("click", () => {
            let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${item.id}`;
            document.querySelector(".loading").classList.remove("d-none");
            this.sendApi(api);
         });
      });
   }
   async sendApi(api) {
      let data = await this.api.getApi(api);
      let showBox = this.html.homaData(data);
      this.api.showData(showBox);
   }
}
