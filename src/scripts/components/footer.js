import { references } from "../datas/star-wars";

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  generateSeparator() {
    return `<div class="separator">|</div>`;
  }

  generateReference({ label, link, textLink }) {
    return `
      <div class="content-footer">
        <h3>${label}</h3>
        <a href=${link} target="_blank" rel=”noopener noreferrer”>${textLink}</a>
      </div>
    `;
  }

  generateReferenceWrapper() {
    let wrapper = "";
    references.forEach((reference, i) => {
      wrapper += this.generateReference(reference);

      if (i === references.length - 1) return;
      wrapper += this.generateSeparator();
    });

    return wrapper;
  }

  async render() {
    this.innerHTML = `
      <footer>${this.generateReferenceWrapper()}</footer>
    `;
  }
}

customElements.define("footer-section", Footer);
