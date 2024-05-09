//   --------- Responsive menu show and hide ---------
const navMenu = document.querySelector("#nav-menu");
const closeMenu = document.querySelector("#nav-close");
const openMenu = document.querySelector("#nav-toggle");

openMenu.addEventListener("click", () => {
  navMenu.classList.add("show_menu");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show_menu");
});

//  --------- Image Gallery ---------
function imgGallery() {
  const mainImg = document.querySelector(".details_img");
  const smallImg = document.querySelectorAll(".details_small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();

//  --------- Swiper Categories ---------
var swiperCategories = new Swiper(".categories_container", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//  --------- Swiper Product ---------
var swiperProducts = new Swiper(".new_container", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// --------- Products Tabs ---------

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});
