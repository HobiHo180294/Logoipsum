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

  // Select Elems
  const selected = document.querySelector(".country-group__selected");
  const optionsContainer = document.querySelector(
    ".country-group__options-container"
  );
  const optionsList = document.querySelectorAll(".country-group__option");
  // Select Elems

  const classToggler = (elems, className) =>
    elems.forEach((element) => element.classList.toggle(className));

  // Burger Handler
  const burgerHandler = () => {
    classToggler(burgerElems, "active");
    document.body.classList.toggle("lock");
  };
  // Burger Handler

  // Burger Handler
  burgerMenu.addEventListener("click", burgerHandler);
  // Burger Handler

  // Closing burger menu by clicking on the links
  getStartedHeaderButton.addEventListener("click", burgerHandler);
  navMenuLinks.forEach((link) => link.addEventListener("click", burgerHandler));
  // Closing burger menu by clicking on the links

  // Smooth scrolling to anchors
  const smoothScroll = (targetEl, duration) => {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = () => {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) =>
      each.addEventListener("click", (e) => {
        const currentTarget = e.target.getAttribute("href");
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
});
