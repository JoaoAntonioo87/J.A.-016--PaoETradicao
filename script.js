// HEADER MENU

const navHeader = Array.from(
  document.getElementsByClassName("header-nav-links"),
);

if (window.screen.availWidth < 1000) {
  navHeader.forEach((element) => {
    element.addEventListener("click", (event) => {
      element.classList.toggle("active");
      event.stopPropagation();
    });

    window.addEventListener("click", (event) => {
      if (Array.from(navHeader[0].classList).includes("active")) {
        navHeader[0].classList.remove("active");
      }
    });
  });
}
