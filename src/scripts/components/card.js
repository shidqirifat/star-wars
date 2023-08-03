import { api } from '../services/api';

class CardFilm extends HTMLElement {
  constructor() {
    super();
    this.films = [];
    this.filmElemen = '';
  }

  async connectedCallback() {
    this.render();
    await this.generateCardWrapper();
    this.render();
  }

  generateCard({
    releaseDate, title, director, image,
  }) {
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
    this.films.forEach((film) => {
      this.filmElemen += this.generateCard(film);
    });
  }

  generateSkeleton() {
    let skeleton = '';
    for (let i = 0; i < 6; i += 1) {
      skeleton += `
        <div class="skeleton-card">
          <div class="skeleton-content">
            <div class="skeleton-date"></div>  
            <div class="skeleton-title"></div>  
            <div class="skeleton-director"></div>  
          </div>
        </div>
      `;
    }
    return skeleton;
  }

  async render() {
    this.innerHTML = `
      <section>
        <h2 class="title-section">Films</h2>
        <div class="card-film-wrapper">
          ${
  this.filmElemen.length === 0
    ? this.generateSkeleton()
    : this.filmElemen
}
        </div>
      </section>
    `;
  }
}

customElements.define('card-film', CardFilm);
