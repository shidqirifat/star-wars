import { api } from "../service/api";

class CardFilm extends HTMLElement {
  constructor() {
    super();
    this.films = [];
  }

  connectedCallback() {
    this.render();
  }

  generateCard({ releaseDate, title, director, image }) {
    return `
      <div class="card-film">
        <div class="shadow-overlay"></div>
        <img class="image-card-film" src=${image} alt=${title} />
        <div class="content-card-film">
          <h4 class="release-date">📅 ${releaseDate}</h4>
          <h1 class="title">${title}</h1>
          <h2 class="director">🎥 ${director}</h2>
        </div>
      </div>
    `;
  }

  async generateCardWrapper() {
    this.films = await api.getFilms();

    let wrapper = "";
    this.films.forEach((film) => {
      wrapper += this.generateCard(film);
    });

    return wrapper;
  }

  async render() {
    this.innerHTML = `
      <div class="card-film-wrapper">${await this.generateCardWrapper()}</div>
    `;
  }
}

customElements.define("card-film", CardFilm);
