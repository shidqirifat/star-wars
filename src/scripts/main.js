import './components/header.js';
import './components/hero.js';
import './components/card.js';
import './components/footer.js';
import swiper from './components/swiper.js';

const main = () => {
  window.addEventListener('resize', () => {
    swiper.update();
  });
};

export default main;
