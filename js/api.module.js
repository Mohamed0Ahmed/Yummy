import { Details } from "./details.module.js";
import { cat } from "./cat.module.js";
import { Area } from "./area.module.js";
import { Ingred } from "./ingredient.module.js";

export class Data {
   async getApi(apis) {
      let response = await fetch(apis);
      response = await response.json();
      let data;
      if (response.meals) {
         data = response.meals;
      } else if (response.categories) {
         data = response.categories;
      }
      return data;
   }
   showData(html) {
      document.getElementById("homaData").innerHTML = html;
      document.querySelector(".loading").classList.add("d-none");
      this.cat = new cat();
      this.cat.catData();
      this.area = new Area();
      this.area.areaData();
      this.ingred = new Ingred();
      this.ingred.ingredData();
      this.showDetails();
   }
   showDetails() {
      document.querySelectorAll(".meal").forEach((meal) => {
         meal.addEventListener("click", () => {
            document.getElementById("home").classList.add("d-none");
            let id = meal.id;
            this.sendId(id);
         });
      });
   }
   sendId(id) {
      this.Details = new Details(id);
   }
}
