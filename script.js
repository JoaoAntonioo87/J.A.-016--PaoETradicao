// HEADER MENU

const navHeader = Array.from(
  document.getElementsByClassName("header-nav-links"),
);

navHeader.forEach((element) => {
  element.addEventListener("click", function (event) {
    element.classList.toggle("active");
  });
});
