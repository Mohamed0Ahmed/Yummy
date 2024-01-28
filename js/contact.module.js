/// <reference types="../@types/jquery" />
import { Valid } from "./validator.module.js";
export class Contact {
   constructor() {
      this.action();
      this.validitor = new Valid();
   }
   action() {
      document.getElementById("contact").addEventListener("click", () => {
         document.getElementById("home").classList.add("d-none");
         document.getElementById("instructions").classList.add("d-none");
         document.getElementById("contactPage").classList.remove("d-none");

      });
   }
}
