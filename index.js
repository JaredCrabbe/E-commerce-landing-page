const initApp = () => {
  const hamburgerBtn = document.querySelector("#mobile-open-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const header = document.querySelector("#header");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    header.classList.toggle("hidden");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
