const trainersSlider = document.querySelector('.trainers__slider');
const opinionSlider = document.querySelector('.opinions__slider');

function swiperTrainersTurnOn() {
  if (trainersSlider) {
    const swiper = new Swiper(trainersSlider, {
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
  return (swiperTrainersTurnOn());
}


function swiperOpinionsTurnOn() {
  if (opinionSlider) {
    const swiper = new Swiper(opinionSlider, {
      slidesPerView: 1,
      cssMode: true,
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.opinions__slider-button--next',
        prevEl: '.opinions__slider-button--prev',
      },
    });
    return swiper;
  }
  return (swiperOpinionsTurnOn());
}

export {swiperTrainersTurnOn, swiperOpinionsTurnOn};
