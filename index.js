document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".bar");
  const mobileMenu = document.querySelector("#mymobilemenu");
  const blurHerosection = document.querySelector("#show-menu");
  const xIcon = document.querySelector(".mobile-menu-toggler");
  const menuList = document.querySelectorAll(".mobile-menu-items>li>a");
  const logo = document.querySelector("header > a");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("mobile-menu1");
    blurHerosection.classList.toggle("header-herosection1");
  };

  const withdrawMenuBar = () => {
    toggleMenu();
    bar.style.display = "none";
    logo.style.display = "none";
  };
});
