import { logo } from '../datas/star-wars';

class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `<header><img class="logo" src=${logo} alt="Star Wars"></header>`;
  }
}

customElements.define('header-section', Header);
