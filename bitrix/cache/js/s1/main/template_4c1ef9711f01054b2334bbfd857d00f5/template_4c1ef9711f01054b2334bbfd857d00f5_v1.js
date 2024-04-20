
; /* Start:"a:4:{s:4:"full";s:50:"/local/templates/main/js/scripts.js?16888380071654";s:6:"source";s:35:"/local/templates/main/js/scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
document.addEventListener("DOMContentLoaded", () => {
    const kitchen = new Swiper('.swiper-kitchen', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // breakpoints: {
      //     320: {
      //       slidesPerView: 1.7,
      //       spaceBetween: 20,
      //     },
      //     768: {
      //       slidesPerView: 3,
      //
      //     },
      //     1024: {
      //       slidesPerView: 4,
      //
      //     },
      //   },

    });

    const about = new Swiper('.swiper-about', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 50,
      slidesPerView: 1,
      speed: 1500,           
      effect: 'fade',
      autoplay: {
        delay: 2500,
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // breakpoints: {
      //     320: {
      //       slidesPerView: 1.2,
      //       spaceBetween: 20,
      //
      //     },
      //     768: {
      //       slidesPerView: 2.5,
      //
      //     },
      //
      //   },

    });


    let btnMenu = document.querySelector(".btn-menu");
    let menuList = document.querySelector(".main-menu");


    btnMenu.addEventListener("click", (e) => {
        e.preventDefault();

        document.body.classList.toggle("show");

    });






});

/* End */
;; /* /local/templates/main/js/scripts.js?16888380071654*/
