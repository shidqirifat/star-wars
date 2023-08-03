import axios from 'axios';
import { images } from '../datas/star-wars';

const BASE_URL = 'https://swapi.dev/api';

const getFilms = async () => {
  const { data } = await axios.get(`${BASE_URL}/films`);
  const films = data.results;

  return films.map((film, i) => ({
    releaseDate: film.release_date,
    title: film.title,
    director: film.director,
    image: images[i],
  }));
};

export const api = { getFilms };
