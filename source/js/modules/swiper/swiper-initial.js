function swiperTurnOn() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    cssMode: true,
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return swiper;
}

export {swiperTurnOn};
