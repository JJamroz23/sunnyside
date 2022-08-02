const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header__nav-box");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const btn2NavEl = document.querySelector(".btn-mobile-nav");
const headerTextEl = document.querySelector(".header__text-box");

btn2NavEl.addEventListener("click", function () {
  headerTextEl.classList.toggle("icon-close");
});
