import { Data } from "./api.module.js";
import { htmlContent } from "./html.module.js";
export class cat {
   constructor() {
      this.api = new Data();
      this.html = new htmlContent();
      this.cat();
   }
   cat() {
      document
         .getElementById("categories")
         .addEventListener("click", async () => {
            let api = `https://www.themealdb.com/api/json/v1/1/categories.php`;
            document.querySelector(".loading").classList.remove("d-none");
            let data = await this.api.getApi(api);
            this.html.categorieBox(data);
         });
   }
   catData() {
      document.querySelectorAll(".cat").forEach((item) => {
         item.addEventListener("click", () => {
            let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.id}`;
            document.querySelector(".loading").classList.remove("d-none");
            this.sendApi(api);
         });
      });
   }
   async sendApi(api) {
      let data = await this.api.getApi(api);
      let html = this.html.homaData(data);
      this.api.showData(html);
   }
}
