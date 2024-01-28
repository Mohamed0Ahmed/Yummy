export class Valid {
   constructor() {
      this.check();
   }

   check() {
      const nameInput = document.getElementById("nameInput");
      const emailInput = document.getElementById("mailInput");
      const phoneInput = document.getElementById("phoneInput");
      const ageInput = document.getElementById("ageInput");
      const passwordInput = document.getElementById("passInput");
      const repasswordInput = document.getElementById("rePassInput");
      const submitButton = document.getElementById("submitButton");

      nameInput.addEventListener("input", () => {
         this.updateSubmitButton(submitButton);
      });

      emailInput.addEventListener("input", () => {
         this.updateSubmitButton(submitButton);
      });

      phoneInput.addEventListener("input", () => {
         this.updateSubmitButton(submitButton);
      });

      ageInput.addEventListener("input", () => {
         this.updateSubmitButton(submitButton);
      });

      passwordInput.addEventListener("input", () => {
         this.updateSubmitButton(submitButton);
      });

      repasswordInput.addEventListener("input", () => {
         this.updateSubmitButton(submitButton);
      });
   }

   updateSubmitButton(submitButton) {
      const isNameValid = this.validateName();
      const isEmailValid = this.validateEmail();
      const isPhoneValid = this.validatePhone();
      const isAgeValid = this.validateAge();
      const isPasswordValid = this.validatePassword();
      const isRepasswordValid = this.validateRepassword();

      submitButton.disabled = !(
         isNameValid &&
         isEmailValid &&
         isPhoneValid &&
         isAgeValid &&
         isPasswordValid &&
         isRepasswordValid
      );

      if (
         isNameValid &&
         isEmailValid &&
         isPhoneValid &&
         isAgeValid &&
         isPasswordValid &&
         isRepasswordValid
      ) {
         console.log("hello");
         submitButton.classList.remove("disabled");
      }
   }

   validateName() {
      const nameInput = document.getElementById("nameInput");
      const alertName = document.getElementById("alertName");
      const regex = /^[a-zA-Z ]+$/;
      const value = nameInput.value.trim(); // Trim to remove leading and trailing spaces

      if (value === "") {
         alertName.classList.add("d-none");
         return false;
      } else if (regex.test(value)) {
         alertName.classList.add("d-none");
         return true;
      } else {
         alertName.classList.remove("d-none");
         return false;
      }
   }

   validateEmail() {
      const emailInput = document.getElementById("mailInput");
      const alertEmail = document.getElementById("alertMail");
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const value = emailInput.value.trim();

      if (value === "") {
         alertEmail.classList.add("d-none");
         return false;
      } else if (emailRegex.test(value)) {
         alertEmail.classList.add("d-none");
         return true;
      } else {
         alertEmail.classList.remove("d-none");
         return false;
      }
   }

   validatePhone() {
      const phoneInput = document.getElementById("phoneInput");
      const alertPhone = document.getElementById("alertPhone");
      const phoneRegex = /^\+?[0-9-]+$/;
      const value = phoneInput.value.trim();

      if (value === "") {
         alertPhone.classList.add("d-none");
         return false;
      } else if (phoneRegex.test(value)) {
         alertPhone.classList.add("d-none");
         return true;
      } else {
         alertPhone.classList.remove("d-none");
         return false;
      }
   }

   validateAge() {
      const ageInput = document.getElementById("ageInput");
      const alertAge = document.getElementById("alertAge");
      const ageRegex = /^\d+$/;
      const value = ageInput.value.trim();

      if (value === "") {
         alertAge.classList.add("d-none");
         return false;
      } else if (ageRegex.test(value)) {
         alertAge.classList.add("d-none");
         return true;
      } else {
         alertAge.classList.remove("d-none");
         return false;
      }
   }

   validatePassword() {
      const passwordInput = document.getElementById("passInput");
      const alertPassword = document.getElementById("alertPass");
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const value = passwordInput.value.trim();

      if (value === "") {
         alertPassword.classList.add("d-none");
         return false;
      } else if (passwordRegex.test(value)) {
         alertPassword.classList.add("d-none");
         return true;
      } else {
         alertPassword.classList.remove("d-none");
         return false;
      }
   }

   validateRepassword() {
      const repasswordInput = document.getElementById("rePassInput");
      const alertRepassword = document.getElementById("alertRePass");
      const repasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const value = repasswordInput.value.trim();

      if (value === "") {
         alertRepassword.classList.add("d-none");
         return false;
      } else if (repasswordRegex.test(value)) {
         alertRepassword.classList.add("d-none");
         return true;
      } else {
         alertRepassword.classList.remove("d-none");
         return false;
      }
   }
}
