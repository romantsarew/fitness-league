const trainersSlider = document.querySelector('.trainers__slider');
const opinionSlider = document.querySelector('.opinions__slider');

function swiperTrainersTurnOn() {

  if (trainersSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
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
          initialSlide: 7,
        },
      },

      navigation: {
        nextEl: '.trainers__button--next',
        prevEl: '.trainers__button--prev',
      },
    });
  }
}


function swiperOpinionsTurnOn() {
  if (opinionSlider) {
    // eslint-disable-next-line no-undef, no-unused-vars
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
  }
}

export {swiperTrainersTurnOn, swiperOpinionsTurnOn};
