import { heros } from '../datas/star-wars';

class HeroSwiper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  generateShadowCard(color) {
    return `
      box-shadow: rgba(${color}, 0.25) 0px 36px 56px -8px,
        rgba(${color}, 0.3) 0px 18px 36px -18px;
    `;
  }

  generateCard({
    image, title, description, color,
  }) {
    return `
      <div class="card-hero swiper-slide" style="${this.generateShadowCard(color)}">
        <div class="shadow-overlay"></div>
        <img
          class="image-card-hero"
          src=${image}
          alt=${title}
        />
        <div class="content-card-hero">
          <h2>${title}</h2>
          <h4>${description}</h4>
        </div>
      </div>
    `;
  }

  generateCardWrapper() {
    let wrapper = '';
    heros.forEach((hero) => {
      wrapper += this.generateCard(hero);
    });

    return wrapper;
  }

  render() {
    this.innerHTML = `
      <div class="swiper">
        <div class="hero-wrapper swiper-wrapper">
          ${this.generateCardWrapper()}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;
  }
}

customElements.define('hero-swiper', HeroSwiper);
