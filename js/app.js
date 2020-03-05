
window.onscroll = function () {
    let nav = document.querySelector('.navbar'),
        windowH = window.scrollY;
     if(windowH > 220) {
        // nav.classList.add('bounceInDown');
        nav.classList.add('fixed-top');
        nav.classList.add('animated');

        nav.classList.add('bounceInDown');

        // animateCSS('.navbar', 'bounceInDown')
        
     } else {
        nav.classList.remove('fixed-top');
        nav.classList.remove('animated');

        nav.classList.remove('bounceInDown');

     }
   
}; 


// swipper
var mySwiper = new Swiper ('.intro-slider', {
    // Optional parameters
    observer: true,
    direction: "horizontal",
    threshold: 50,
    // direction: 'vertical',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    watchSlidesProgress: true,

    fadeEffect: {
      crossFade: true
    },
    // mousewheel: {
    //   invert: false
    // },
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  var trustus = new Swiper ('.trust-container', {
    // Optional parameters
    observer: true,
    direction: "horizontal",
    threshold: 50,
    // direction: 'vertical',
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    watchSlidesProgress: true,

    fadeEffect: {
      crossFade: true
    },
    // mousewheel: {
    //   invert: false
    // },
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 640px
      769: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // jquery
  $(function(){

$( '.limt100').each(function() {
  let shortlimt100 = $(this).text().substring(0, 100) + " ...";
  $(this).text(shortlimt100);
});

// nice scroll init
$("body").niceScroll({
  cursorcolor:"#1abc9c",
  cursorwidth:"10px",
  scrollspeed:"150"
});

  })