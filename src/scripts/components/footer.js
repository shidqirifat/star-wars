class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <footer>
        <div class="content-footer">
          <h3>Created by </h3>
          <a href="https://shidqirifat-portofolio.vercel.app/" target="_blank" rel=”noopener noreferrer”>Shidqi</a>
        </div>
        <div class="separator">|</div>
        <div class="content-footer">
          <h3>Asset by </h3>
          <a href="https://www.starwars.com/" target="_blank" rel=”noopener noreferrer”>Star Wars</a>
        </div>
        <div class="separator">|</div>
        <div class="content-footer">
          <h3>Data by </h3>
          <a href="https://swapi.dev/" target="_blank" rel=”noopener noreferrer”>Swapi API</a>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-section", Footer);
