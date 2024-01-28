import { Data } from "./api.module.js";
import { htmlContent } from "./html.module.js";

export class Search {
   constructor() {
      this.api = new Data();
      this.html = new htmlContent();
      this.search();
   }
   search() {
      document.getElementById("sreach").addEventListener("click", () => {

         let searchBox = `
        <div class="col-6">
          <div>
            <input id="searchByName" type="text" class="form-control bg-transparent text-white" placeholder=" search By Name" />
          </div>
        </div>
        <div class="col-6">
          <div>
            <input id="searchByLetter" type="text" class="form-control bg-transparent text-white" maxlength="1" placeholder=" search By First Letter" />
          </div>
        </div>
        <div class="col-12 position-relative">
          <div id="result" class="row g-4"></div>
          <div class="loading">
            <span class="loader"></span>
          </div>
        </div>
      `;
         this.showInputs(searchBox);

      });
   }
   showInputs(html) {
      document.getElementById("homaData").innerHTML = html;
      document.getElementById("instructions").classList.add("d-none");
      document.getElementById("contactPage").classList.add("d-none");
      document.getElementById("home").classList.remove("d-none");
      // document.querySelector(".loading").classList.add("d-none");
      $(".loading").fadeOut(300);
      

      this.searchByName();
      this.searchByLetter();
   }
   searchByName() {
      let search = document.getElementById("searchByName");
      search.addEventListener("input", async () => {
         let searchValue = search.value;
         let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
         document.querySelector(".loading").classList.remove("d-none");
         let result = await this.api.getApi(api);
         $(".loading").fadeIn(300);
         
         this.showResult(this.html.homaData(result));
         $(".loading").fadeOut(30);
      });
   }
   searchByLetter() {
      let search = document.getElementById("searchByLetter");
      search.addEventListener("input", async () => {
         let searchValue = search.value;
         let api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
         let result = await this.api.getApi(api);
         $(".loading").fadeIn(300);
         
         this.showResult(this.html.homaData(result));
         $(".loading").fadeOut(300);
      });
   }
   showResult(html) {
      document.getElementById("result").innerHTML = html;
      document.querySelector(".loading").classList.add("d-none");
      this.api.showDetails();
   }
}
