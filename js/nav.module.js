/// <reference types="../@types/jquery" />

export class Nav {
   constructor() {
      let widthSide = $(".side").outerWidth();
      let date = new Date();
      const currentYear = date.getFullYear();
      document.getElementById("year").innerHTML = currentYear;
      this.openNav(widthSide);
   }

   openNav(widthSide) {
      $(".menu").on("click", function (e) {
         $(".menu").hide();
         $("#nav").animate({ left: "0" }, 500);
         $(".close").show();

         for (let i = 0; i < 5; i++) {
            $(".links li")
               .eq(i)
               .animate(
                  {
                     top: 0,
                  },
                  (i + 5) * 100
               );
         }
      });
      this.closeNav(widthSide);
   }
   closeNav(widthSide) {
      $(".close,.links li").on("click", function (e) {
         $(".close").hide();
         $("#nav").animate({ left: -widthSide + "px" }, 500);
         $(".menu").show();
         $(".links li").animate(
            {
               top: 300,
            },
            500
         );
      });
   }
}
