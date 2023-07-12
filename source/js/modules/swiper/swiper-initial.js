function swiperTurnOn() {
  const swiper = new Swiper('.swiper', {
    initialSlide: 0,
    cssMode: true,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 1200px
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },

    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },
  });

  return swiper;
}

export {swiperTurnOn};
