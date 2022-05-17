"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["service"],{

/***/ "./scss/service.scss":
/*!***************************!*\
  !*** ./scss/service.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/service.mjs":
/*!************************!*\
  !*** ./js/service.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_service_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/service.scss */ "./scss/service.scss");
 // Form Validation

var form = document.querySelector(".form-auth");
var requiredInputs = document.querySelectorAll(".js-input");
var inputLogin = document.querySelector(".login-group__field");
var inputPass = document.querySelector(".pass-group__field "); // Form Validation
// Form Validation

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var loginVal = inputLogin.value;
  var passVal = inputPass.value;
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

  if (emptyInputs.length === 0) {
    form.submit();
    form.reset();
    alert("Please wait...");
  }
}); // Form Validation

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./js/service.mjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=service.js.map