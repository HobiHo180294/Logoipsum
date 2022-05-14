"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./js/class-toggler.mjs":
/*!******************************!*\
  !*** ./js/class-toggler.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar classToggler = function classToggler(elems, className) {\n  return elems.forEach(function (element) {\n    return element.classList.toggle(className);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classToggler);\n\n//# sourceURL=webpack:///./js/class-toggler.mjs?");

/***/ }),

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _smooth_scroll_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll.mjs */ \"./js/smooth-scroll.mjs\");\n/* harmony import */ var _class_toggler_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-toggler.mjs */ \"./js/class-toggler.mjs\");\n/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar */ \"../node_modules/simplebar/dist/simplebar.esm.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  \"use strict\"; // Sticky Header\n\n  var header = document.querySelector(\".header\"); // Sticky Header\n  // Burger Elems\n\n  var burgerMenu = document.querySelector(\".header__burger\");\n  var navMenu = document.querySelector(\".menu\");\n  var getStartedHeaderButton = document.querySelector(\".header__button\");\n  var navMenuLinks = document.querySelectorAll(\".menu__link\");\n  var burgerElems = [burgerMenu, navMenu, getStartedHeaderButton]; // Burger Elems\n  // Sticky Header\n\n  if (window.scrollY > 50) {\n    header.classList.add(\"header_active\");\n  }\n\n  window.addEventListener(\"scroll\", function () {\n    if (window.scrollY > 50) {\n      header.classList.add(\"header_active\");\n    } else {\n      header.classList.remove(\"header_active\");\n    }\n  }); // Sticky Header\n  // Select Elems\n\n  var selected = document.querySelector(\".country-group__selected\");\n  var optionsContainer = document.querySelector(\".country-group__options-container\");\n  var optionsList = document.querySelectorAll(\".country-group__option\"); // Select Elems\n  // Burger Handler\n\n  var burgerHandler = function burgerHandler() {\n    (0,_class_toggler_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(burgerElems, \"active\");\n    document.body.classList.toggle(\"lock\");\n  }; // Burger Handler\n  // Burger Handler\n\n\n  burgerMenu.addEventListener(\"click\", burgerHandler); // Burger Handler\n  // Closing burger menu by clicking on the links\n\n  getStartedHeaderButton.addEventListener(\"click\", burgerHandler);\n  navMenuLinks.forEach(function (link) {\n    return link.addEventListener(\"click\", burgerHandler);\n  }); // Closing burger menu by clicking on the links\n  // Smooth scrolling to anchors\n\n  var scrollTo = function scrollTo() {\n    var links = document.querySelectorAll(\".js-scroll\");\n    links.forEach(function (each) {\n      return each.addEventListener(\"click\", function () {\n        var currentTarget = this.getAttribute(\"href\");\n        (0,_smooth_scroll_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentTarget, 1000);\n      });\n    });\n  };\n\n  scrollTo(); // Smooth scrolling to anchors\n  // Custom Select Realization\n\n  selected.addEventListener(\"click\", function () {\n    return optionsContainer.classList.toggle(\"active\");\n  });\n  optionsList.forEach(function (o) {\n    return o.addEventListener(\"click\", function () {\n      selected.innerHTML = o.querySelector(\".country-group__label\").innerHTML;\n      optionsContainer.classList.remove(\"active\");\n    });\n  }); // Custom Select Realization\n});\n\n//# sourceURL=webpack:///./js/main.mjs?");

/***/ }),

/***/ "./js/smooth-scroll.mjs":
/*!******************************!*\
  !*** ./js/smooth-scroll.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll(targetEl, duration) {\n  var headerElHeight = document.querySelector(\".header\").clientHeight;\n  var target = document.querySelector(targetEl);\n  var targetPosition = target.getBoundingClientRect().top - headerElHeight;\n  var startPosition = window.scrollY;\n  var startTime = null;\n\n  var ease = function ease(t, b, c, d) {\n    t /= d / 2;\n    if (t < 1) return c / 2 * t * t + b;\n    t--;\n    return -c / 2 * (t * (t - 2) - 1) + b;\n  };\n\n  var animation = function animation(currentTime) {\n    if (startTime === null) startTime = currentTime;\n    var timeElapsed = currentTime - startTime;\n    var run = ease(timeElapsed, startPosition, targetPosition, duration);\n    window.scrollTo(0, run);\n    if (timeElapsed < duration) requestAnimationFrame(animation);\n  };\n\n  requestAnimationFrame(animation);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./js/smooth-scroll.mjs?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_simplebar_dist_simplebar_esm_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./js/main.mjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);