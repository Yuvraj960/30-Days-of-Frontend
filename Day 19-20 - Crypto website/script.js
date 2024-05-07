const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  menu.classList.toggle("menu-active");
});
