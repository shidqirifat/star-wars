import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "./component/hero.js";

const main = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    console.log('loaded');

    new Swiper('.swiper', {
      speed: 400,
      spaceBetween: 24,
      slidesPerView: 1.2,
      centeredSlides: true,
      loop: true,
      autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      modules: [Autoplay, Pagination]
    });
  });
}

export default main;
