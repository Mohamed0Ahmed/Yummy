import { Data } from "./api.module.js";
export class htmlContent {
   constructor() {
      this.api = new Data();
   }
   homaData(api) {
      let htmlContent = ``;
      for (let i = 0; i < api.length; i++) {
         const data = api[i];
         htmlContent += `
        <div class="col-md-3">
          <div id="${data.idMeal}" class="rounded-2 overflow-hidden position-relative meal">
            <img src="${data.strMealThumb}" class="w-100"/>
            <div class="layer position-absolute d-flex align-items-center p-2">
              <h3>${data.strMeal}</h3>
            </div>
          </div>
        </div>
      `;
      }
      return htmlContent;
   }
   categorieBox(api) {
      let htmlContent = ``;
      for (let i = 0; i < api.length; i++) {
         const data = api[i];
         htmlContent += `
          <div class="col-md-3">
            <div id="${
              data.strCategory
            }" class="position-relative overflow-hidden rounded-2 cat">
              <img src="${data.strCategoryThumb}"/>
              <div class="layer position-absolute text-center p-2">
                <h3>${data.strCategory}</h3>
                <p>${data.strCategoryDescription
                   .split(" ")
                   .slice(0, 20)
                   .join(" ")}</p>
              </div>
            </div>
          </div>
      `;
      }
      this.api.showData(htmlContent);
   }
   areaBox(api) {
      let htmlContent = ``;
      for (let i = 0; i < api.length; i++) {
         const  data = api[i];
         htmlContent += `
          <div class="col-md-3 text-white text-center">
            <div data-area="${data.strArea}" class="area">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${data.strArea}</h3>
            </div>
          </div>
      `;
      }
      this.api.showData(htmlContent);
   }
   ingredHtml(api) {
      let htmlContent = ``;
      for (let i = 0; i < 20; i++) {
         const data = api[i];
         htmlContent += `
          <div class="col-md-3 text-white text-center">
            <div id="${data.strIngredient}" class="ingred">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${data.strIngredient}</h3>
              <p>${data.strDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
          </div>
      `;
      }
      this.api.showData(htmlContent);
   }
}
