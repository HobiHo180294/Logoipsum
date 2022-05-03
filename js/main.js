"use strict";

// Sticky header
(function () {
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  });
})(); // Sticky header


document.addEventListener("DOMContentLoaded", function () {
  "use strict"; // Burger Elems

  var burgerMenu = document.querySelector(".header__burger");
  var navMenu = document.querySelector(".menu");
  var getStartedHeaderButton = document.querySelector(".header__button");
  var navMenuLinks = document.querySelectorAll(".menu__link");
  var burgerElems = [burgerMenu, navMenu, getStartedHeaderButton]; // Burger Elems
  // Select Elems

  var selected = document.querySelector(".country-group__selected");
  var optionsContainer = document.querySelector(".country-group__options-container");
  var optionsList = document.querySelectorAll(".country-group__option"); // Select Elems

  var classToggler = function classToggler(elems, className) {
    return elems.forEach(function (element) {
      return element.classList.toggle(className);
    });
  }; // Burger Handler


  var burgerHandler = function burgerHandler() {
    classToggler(burgerElems, "active");
    document.body.classList.toggle("lock");
  }; // Burger Handler
  // Burger Handler


  burgerMenu.addEventListener("click", burgerHandler); // Burger Handler
  // Closing burger menu by clicking on the links

  getStartedHeaderButton.addEventListener("click", burgerHandler);
  navMenuLinks.forEach(function (link) {
    return link.addEventListener("click", burgerHandler);
  }); // Closing burger menu by clicking on the links
  // Smooth scrolling to anchors

  var smoothScroll = function smoothScroll(targetEl, duration) {
    var headerElHeight = document.querySelector(".header").clientHeight;
    var target = document.querySelector(targetEl);
    var targetPosition = target.getBoundingClientRect().top - headerElHeight;
    var startPosition = window.pageYOffset;
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

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll(".js-scroll");
    links.forEach(function (each) {
      return each.addEventListener("click", function (e) {
        var currentTarget = e.target.getAttribute("href");
        smoothScroll(currentTarget, 1000);
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
});