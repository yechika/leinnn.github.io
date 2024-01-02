const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav__active");
    burger.classList.toggle("toggle__burger");
  });
};
navSlide();
