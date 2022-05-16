"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/class-toggler.mjs":
/*!******************************!*\
  !*** ./js/class-toggler.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var classToggler = function classToggler(elems, className) {
  return elems.forEach(function (element) {
    return element.classList.toggle(className);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classToggler);

/***/ }),

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _smooth_scroll_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll.mjs */ "./js/smooth-scroll.mjs");
/* harmony import */ var _class_toggler_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-toggler.mjs */ "./js/class-toggler.mjs");
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar */ "../node_modules/simplebar/dist/simplebar.esm.js");




document.addEventListener("DOMContentLoaded", function () {
  "use strict"; // Sticky Header

  var header = document.querySelector(".header"); // Sticky Header
  // Burger Elems

  var burgerMenu = document.querySelector(".header__burger");
  var navMenu = document.querySelector(".menu");
  var getStartedHeaderButton = document.querySelector(".header__button");
  var navMenuLinks = document.querySelectorAll(".menu__link");
  var burgerElems = [burgerMenu, navMenu, getStartedHeaderButton]; // Burger Elems
  // Select Elems

  var selected = document.querySelector(".country-group__selected");
  var optionsContainer = document.querySelector(".country-group__options-container");
  var optionsList = document.querySelectorAll(".country-group__option");
  var selectedTextContent = selected.textContent; // Select Elems
  // Form Validation

  var form = document.querySelector(".form-queue");
  var requiredInputs = document.querySelectorAll(".js-input");
  var inputName = document.querySelector(".name-group__field");
  var inputPhone = document.querySelector(".phone__field");
  var countryRadioBtns = document.getElementsByName("country");

  var validateName = function validateName(name) {
    var regExpName = /^['A-Za-z\u0410-\u044F][ '\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/;
    return regExpName.test(String(name));
  };

  var validatePhone = function validatePhone(phone) {
    var regExpPhone = /^\+?[0-9]{2,3}-?[0-9]{6,12}$/;
    return regExpPhone.test(String(phone));
  }; // Form Validation
  // -------------------------------------------------------------------
  // Sticky Header


  if (window.scrollY > 50) {
    header.classList.add("header_active");
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  }); // Sticky Header
  // Burger Handler

  var burgerHandler = function burgerHandler() {
    (0,_class_toggler_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(burgerElems, "active");
    document.body.classList.toggle("lock");
  };

  burgerMenu.addEventListener("click", burgerHandler); // Burger Handler
  // Closing burger menu by clicking on the links

  getStartedHeaderButton.addEventListener("click", burgerHandler);
  navMenuLinks.forEach(function (link) {
    return link.addEventListener("click", burgerHandler);
  }); // Closing burger menu by clicking on the links
  // Smooth scrolling to anchors

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll(".js-scroll");
    links.forEach(function (each) {
      return each.addEventListener("click", function () {
        var currentTarget = this.getAttribute("href");
        (0,_smooth_scroll_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(currentTarget, 1000);
      });
    });
  };

  scrollTo(); // Smooth scrolling to anchors
  // Custom Select Realization

  selected.addEventListener("click", function () {
    return optionsContainer.classList.toggle("active");
  });
  optionsList.forEach(function (o) {
    return o.addEventListener("click", function () {
      selected.innerHTML = o.querySelector(".country-group__label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  }); // Custom Select Realization
  // Form Validation

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameVal = inputName.value;
    var phoneVal = inputPhone.value;
    var emptyInputs = Array.from(requiredInputs).filter(function (input) {
      return input.value === "";
    });
    requiredInputs.forEach(function (input) {
      if (input.value === "") {
        input.classList.add("error");
        input.nextElementSibling.textContent = "Please, fill the required field!";
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

    if (!validatePhone(phoneVal)) {
      inputPhone.classList.add("error");
      inputPhone.nextElementSibling.textContent = "Please enter a valid phone";
    } else {
      inputPhone.classList.remove("error");
      inputPhone.nextElementSibling.textContent = "";
    }

    if (selected.textContent === selectedTextContent) {
      selected.classList.add("error");
      selected.nextElementSibling.textContent = "Please select your country";
    }

    for (var i = 0; i < countryRadioBtns.length; i++) {
      if (countryRadioBtns[i].type === "radio" && countryRadioBtns[i].checked) {
        if (selected.classList.contains("error")) {
          selected.nextElementSibling.textContent = "";
          selected.classList.remove("error");
        }
      }
    }

    if (emptyInputs.length === 0 && validateName(nameVal) && validatePhone(phoneVal) && !selected.classList.contains("error")) {
      alert("We'll call you");
      form.submit();
      form.reset();
    }
  }); // Form Validation
});

/***/ }),

/***/ "./js/smooth-scroll.mjs":
/*!******************************!*\
  !*** ./js/smooth-scroll.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var smoothScroll = function smoothScroll(targetEl, duration) {
  var headerElHeight = document.querySelector(".header").clientHeight;
  var target = document.querySelector(targetEl);
  var targetPosition = target.getBoundingClientRect().top - headerElHeight;
  var startPosition = window.scrollY;
  var startTime = null;

  var ease = function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  var animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_simplebar_dist_simplebar_esm_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./js/main.mjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map