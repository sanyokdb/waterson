// Бургер
// const burger = document.getElementById("burger");
// const nav = document.getElementById("nav");

// burger.addEventListener("click", function(){
//   nav.classList.toggle("nav--active");
//   burger.classList.toggle("burger--active");
//   document.body.classList.toggle("no-scroll");
// })

const heroSlider = new Swiper(".hero-slider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4500,
  },
  navigation: {
    nextEl: ".hero-slider__navigation-next",
    prevEl: ".hero-slider__navigation-prev",
  },
  pagination: {
    el: ".hero-slider__pagination .number",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    }
  },
});


const partnersSlider = new Swiper(".partners-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
  },
  navigation: {
    nextEl: ".partners-slider__navigation-next",
    prevEl: ".partners-slider__navigation-prev",
  },
});