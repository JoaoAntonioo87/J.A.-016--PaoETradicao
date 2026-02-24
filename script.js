// HEADER MENU
const navHeader = Array(document.querySelector(".header-nav-links"));
const eventsHeaderMenu = ["click", "touch"];

if (window.screen.availWidth < 1000) {
  navHeader.forEach((element) => {
    eventsHeaderMenu.forEach((eventName) => {
      element.addEventListener(eventName, (event) => {
        element.classList.toggle("active");
        console.log("1");
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
const imgIntro = document.querySelector(".intro-img");
let i = 1;
let isVisible = false;

const observer = new IntersectionObserver((entries) => {
  isVisible = entries[0].isIntersecting;
});
observer.observe(imgIntro);

setInterval(() => {
  if (!isVisible) return;
  imgIntro.src = i === 7 ? "img/img-01.jpg" : `img/img-0${i + 1}.jpg`;
  i = i === 7 ? 1 : i + 1;
}, 2500);

// SLIDE ANIMATIONS
const slideElements = document.querySelectorAll("[data-slide]");

if ("requestIdleCallback" in window) {
  requestIdleCallback(() => {
    slideElements.forEach((element) => {
      if (window.outerHeight > element.offsetTop + 50) {
        element.dataset.slide = null;
        element.style.opacity = 1;
      }
      if (window.screen.availWidth > 1200) {
        if (
          element.dataset.slide === "left" ||
          element.dataset.slide === "right"
        ) {
          element.dataset.slide = "down";
        }
      }
    });
  });
}

// Debounce scroll listener
let scrollTimeout;
window.addEventListener(
  "scroll",
  () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      slideElements.forEach((element) => {
        if (window.outerHeight + window.scrollY > element.offsetTop + 200) {
          element.classList.add("active");
        }
      });
    }, 100);
  },
  { passive: true },
);

// HANDLE ACCORDION

const accordionElement = Array.from(
  document.querySelectorAll(".differences-card"),
);

accordionElement.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});
