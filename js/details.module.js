import { Data } from "./api.module.js";
export class Details {
   constructor(id) {
      this.getDetails(id);
   }
   async getDetails(id) {
      let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      this.api = new Data();
      document.querySelector(".loading").classList.remove("d-none");
      let arry = await this.api.getApi(api);
      const data = arry[0];

      let recipes = ``;
      for (let i = 1; i <= 20; i++) {
         if (data[`strIngredient${i}`]) {
            recipes += `<li class="alert alert-info m-2 p-1">${
               data[`strMeasure${i}`]
            } ${data[`strIngredient${i}`]}</li>`;
         }
      }
      let strTags = data.strTags?.split(",");
      if (!strTags) strTags = [];

      let tags = "";
      for (let i = 0; i < strTags.length; i++) {
         tags += `
      <li class="alert alert-danger m-2 p-1">${strTags[i]}</li>`;
      }
      document.getElementById("details").innerHTML = `
      <div class="col-md-4">
      <div class="position-sticky top-0 start-0">
         <img src="${data.strMealThumb}" class="rounded-2 w-100" />
         <h2 class="text-white py-2">${data.strMeal}</h2>
      </div>
      </div>
      <div class="col-md-8">
         <div class="text-white">
         <div class="d-flex justify-content-between align-items-center">
            <h2>Instructions</h2>
            <i class="btnClose fa-solid fa-xmark fa-2xl"></i>
         </div>
         <p>${data.strInstructions}</p>
         <h2 class="py-2 fw-bold">Area : <span>${data.strArea}</span></h2>
         <h3 class="fw-bold">Category : <span>${data.strCategory}</span></h3>
         <h3 class="fw-bold">Recipes :</h3>
         <ul class="list-unstyled d-flex g-3 flex-wrap">${recipes}</ul>
         <h3>Tags :</h3>
         <ul class=" d-flex list-unstyled g-3 flex-wrap">
            ${tags}

            </ul>
         <a href="${data.strSource}" target="_blank" class="btn btn-success">Source</a>
         <a href="${data.strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
      </div>
      </div>
   `;
      $(".loading").fadeIn(300);
      document
         .querySelector(".btnClose")
         .addEventListener("click", function () {
            document.getElementById("home").classList.remove("d-none");
            document.getElementById("instructions").classList.add("d-none");
         });
      document.getElementById("instructions").classList.remove("d-none");
      $(".loading").fadeOut(300);
   }
}
