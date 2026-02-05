// HEADER MENU

const navHeader = Array.from(
  document.getElementsByClassName("header-nav-links"),
);

const eventsHeaderMenu = ["click", "touch"];

if (window.screen.availWidth < 1000) {
  navHeader.forEach((element) => {
    eventsHeaderMenu.forEach((eventName) => {
      element.addEventListener(eventName, (event) => {
        element.classList.toggle("active");
        event.stopPropagation();
      });
    });

    eventsHeaderMenu.forEach((eventName) => {
      window.addEventListener(eventName, (event) => {
        if (Array.from(navHeader[0].classList).includes("active")) {
          navHeader[0].classList.remove("active");
        }
      });
    });
  });
}

// IMAGE INTRO

const imgIntro = document.getElementsByClassName("intro-img");
let i = 1;

setInterval(() => {
  if (i === 7) {
    imgIntro[0].src = "img/img-01.jpg";
    i = 1;
  } else {
    imgIntro[0].src = `img/img-0${i + 1}.jpg`;
    i = i + 1;
  }
}, 2000);
