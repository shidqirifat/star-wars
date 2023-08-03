class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <header>
        <img class="logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Star Wars">
      </header>
    `;
  }
}

customElements.define("header-section", Header);
