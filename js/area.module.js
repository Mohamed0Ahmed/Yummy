import { Data } from "./api.module.js";
import { htmlContent } from "./html.module.js";
export class Area {
   constructor() {
      this.api = new Data();
      this.html = new htmlContent();
      this.area();
   }
   area() {
      document.getElementById("area").addEventListener("click", async () => {
         let api = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
         document.querySelector(".loading").classList.remove("d-none");
         let data = await this.api.getApi(api);
         data= data.slice(0,20)
         this.html.areaBox(data);

         $(".loading").fadeOut(300);
            document.getElementById("instructions").classList.add("d-none");
            document.getElementById("contactPage").classList.add("d-none");
            document.getElementById("home").classList.remove("d-none");
      });
   }
   areaData() {
      document.querySelectorAll(".area").forEach((area) => {
         area.addEventListener("click", () => {
            let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area.dataset.area}`;
            document.querySelector(".loading").classList.remove("d-none");
            this.sendApi(api);
         });
      });
   }
   async sendApi(api) {
      let data = await this.api.getApi(api);
      data = data.slice(0, 20);
      let htmlContent = this.html.homaData(data);
      this.api.showData(htmlContent);
   }
}
