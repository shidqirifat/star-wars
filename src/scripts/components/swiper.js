/* eslint-disable import/no-unresolved */
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  speed: 400,
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 3000,
    disableOnInteraction: false,
  },
  observer: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    220: {
      spaceBetween: 16,
      slidesPerView: 1.15,
    },
    550: {
      spaceBetween: 20,
      slidesPerView: 1.2,
    },
    880: {
      spaceBetween: 24,
      slidesPerView: 1.7,
      centeredSlides: true,
    },
  },
  modules: [Autoplay, Pagination],
});

export default swiper;
