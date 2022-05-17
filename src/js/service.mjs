import "@/scss/service.scss";

// Form Validation
const form = document.querySelector(".form-auth");
const requiredInputs = document.querySelectorAll(".js-input");

const inputLogin = document.querySelector(".login-group__field");
const inputPass = document.querySelector(".pass-group__field ");
// Form Validation

// Form Validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginVal = inputLogin.value;
  const passVal = inputPass.value;

  const emptyInputs = Array.from(requiredInputs).filter(
    (input) => input.value === ""
  );

  requiredInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.textContent = "Please, fill the required field!";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.textContent = "";
    }
  });

  if (emptyInputs.length === 0) {
    form.submit();
    form.reset();
    alert("Please wait...");
  }
});
// Form Validation
