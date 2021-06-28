const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("sjjsjsjsjs");
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (elements) {
      elements.classList.remove("fade-in");
      elements.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (elements) {
      elements.classList.add("fade-in");
      elements.classList.remove("fade-out");
    });
  }
});
