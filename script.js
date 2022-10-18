"use strict";

const menuLinks1 = document.querySelector(".menu__links-1");
const menuLinks2 = document.querySelector(".menu__links-2");
const menuLinks4 = document.querySelector(".menu__links-4");
const menuBar = document.querySelector(".toggler");
menuBar.addEventListener("click", function () {
  document
    .querySelector(".menu-wrap .toggler:checked ~ .menu")
    .style.setProperty("visibility", "visible");
});
menuLinks1.addEventListener("click", function () {
  document
    .querySelector(".menu-wrap .toggler:checked ~ .menu")
    .style.setProperty("visibility", "hidden");
});
menuLinks2.addEventListener("click", function () {
  document
    .querySelector(".menu-wrap .toggler:checked ~ .menu")
    .style.setProperty("visibility", "hidden");
});
menuLinks4.addEventListener("click", function () {
  document
    .querySelector(".menu-wrap .toggler:checked ~ .menu")
    .style.setProperty("visibility", "hidden");
});
