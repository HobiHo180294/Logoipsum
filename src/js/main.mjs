import "@/scss/style.scss";
import smoothScroll from "./smooth-scroll.mjs";
import classToggler from "./class-toggler.mjs";
import SimpleBar from "simplebar";
import IMask, { MaskElement } from "imask";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  // Sticky Header
  const header = document.querySelector(".header");
  // Sticky Header

  // Burger Elems
  const burgerMenu = document.querySelector(".header__burger");
  const navMenu = document.querySelector(".menu");
  const getStartedHeaderButton = document.querySelector(".header__button");
  const navMenuLinks = document.querySelectorAll(".menu__link");

  const burgerElems = [burgerMenu, navMenu, getStartedHeaderButton];
  // Burger Elems

  // Select Elems
  const selected = document.querySelector(".country-group__selected");
  const optionsContainer = document.querySelector(
    ".country-group__options-container"
  );
  const optionsList = document.querySelectorAll(".country-group__option");
  const selectedTextContent = selected.textContent;
  // Select Elems

  // Form Validation
  const form = document.querySelector(".form-queue");
  const requiredInputs = document.querySelectorAll(".js-input");

  const inputName = document.querySelector(".name-group__field");
  const inputPhone = document.querySelector(".phone__field");
  const countryRadioBtns = document.getElementsByName("country");

  const validateName = (name) => {
    const regExpName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    return regExpName.test(String(name));
  };

  const validatePhone = (phone) => {
    const regExpPhone = /^\+?[0-9]{2,3}-?[0-9]{6,12}$/;
    return regExpPhone.test(String(phone));
  };

  // Form Validation

  // Phone Mask
  const phoneMaskOptions = {
    mask: "",
    lazy: false,
  };

  const phoneMask = new IMask(inputPhone, phoneMaskOptions);
  // Phone Mask

  // -------------------------------------------------------------------

  // Sticky Header
  if (window.scrollY > 50) {
    header.classList.add("header_active");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  });
  // Sticky Header

  // Burger Handler
  const burgerHandler = () => {
    classToggler(burgerElems, "active");
    document.body.classList.toggle("lock");
  };

  burgerMenu.addEventListener("click", burgerHandler);
  // Burger Handler

  // Closing burger menu by clicking on the links
  getStartedHeaderButton.addEventListener("click", burgerHandler);
  navMenuLinks.forEach((link) => link.addEventListener("click", burgerHandler));
  // Closing burger menu by clicking on the links

  // Smooth scrolling to anchors
  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) =>
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      })
    );
  };
  scrollTo();
  // Smooth scrolling to anchors

  // Custom Select Realization
  selected.addEventListener("click", () =>
    optionsContainer.classList.toggle("active")
  );

  optionsList.forEach((o) =>
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector(".country-group__label").innerHTML;
      optionsContainer.classList.remove("active");
    })
  );
  // Custom Select Realization

  // Phone Mask
  countryRadioBtns.forEach((country) => {
    country.addEventListener("click", () => {
      if (country.type === "radio" && country.checked) {
        if (country.value === "USA") {
          console.log("HELLO!");
          phoneMask.updateOptions({
            mask: "+{1}(000)-000-0000",
          });
        }

        if (country.value === "China") {
          phoneMask.updateOptions({
            mask: "+{86}(000)-000-0000",
          });
        }

        if (country.value === "Japan") {
          phoneMask.updateOptions({
            mask: "+{81}(000)-000-0000",
          });
        }

        if (country.value === "Germany") {
          phoneMask.updateOptions({
            mask: "+{49}(000)-000-0000",
          });
        }
        if (country.value === "India") {
          phoneMask.updateOptions({
            mask: "+{91}(000)-000-0000",
          });
        }

        if (country.value === "UK") {
          phoneMask.updateOptions({
            mask: "+{44}(000)-000-0000",
          });
        }

        if (country.value === "France") {
          phoneMask.updateOptions({
            mask: "+{33}(000)-000-0000",
          });
        }

        if (country.value === "Italy") {
          phoneMask.updateOptions({
            mask: "+{39}(000)-000-0000",
          });
        }

        if (country.value === "Brazil") {
          phoneMask.updateOptions({
            mask: "+{55}(000)-000-0000",
          });
        }

        if (country.value === "Ukraine") {
          phoneMask.updateOptions({
            mask: "+{38}(000)-000-0000",
          });
        }
      }
    });
  });

  // Phone Mask

  // Form Validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = inputName.value;
    const phoneVal = inputPhone.value;

    const emptyInputs = Array.from(requiredInputs).filter(
      (input) => input.value === ""
    );

    requiredInputs.forEach((input) => {
      if (input.value === "") {
        input.classList.add("error");
        input.nextElementSibling.textContent =
          "Please, fill the required field!";
      } else {
        input.classList.remove("error");
        input.nextElementSibling.textContent = "";
      }
    });

    if (!validateName(nameVal)) {
      inputName.classList.add("error");
      inputName.nextElementSibling.textContent = "Please enter a valid name";
    } else {
      inputName.classList.remove("error");
      inputName.nextElementSibling.textContent = "";
    }

    // if (!validatePhone(phoneVal)) {
    //   inputPhone.classList.add("error");
    //   inputPhone.nextElementSibling.textContent = "Please enter a valid phone";
    // } else {
    //   inputPhone.classList.remove("error");
    //   inputPhone.nextElementSibling.textContent = "";
    // }

    if (selected.textContent === selectedTextContent) {
      selected.classList.add("error");
      selected.nextElementSibling.textContent = "Please select your country";
    }

    for (let i = 0; i < countryRadioBtns.length; i++) {
      if (countryRadioBtns[i].type === "radio" && countryRadioBtns[i].checked) {
        if (selected.classList.contains("error")) {
          selected.nextElementSibling.textContent = "";
          selected.classList.remove("error");
        }
      }
    }

    if (
      emptyInputs.length === 0 &&
      validateName(nameVal) &&
      !selected.classList.contains("error")
    ) {
      form.submit();
      form.reset();
      alert("Please wait...");
    }
  });
  // Form Validation
});
