import axios from 'axios';
import API_URL from '../../../env';

axios.defaults.baseURL = API_URL;

async function fetchMovies() {
  const result = await axios.get(`${API_URL}/movies`);
  return result.data;
}

const paramBuilder = (queries: any) => {
  let param = '?';
  Object.entries(queries).forEach(([key, value]) => {
    if (value) {
      param += `${key}=${value}&`;
    }
  });
  return param;
};

async function fetchMoviesQueries(queries: any) {
  const params = paramBuilder(queries);
  const result = await axios.get(`${API_URL}/movies${params}`);
  return result.data;
}

async function fetchMovie(id: number) {
  const result = await axios.get(`${API_URL}/movies/${id}`);
  return result.data;
}

async function editMovie(movie: any) {
  const result = await axios.put(`${API_URL}/movies/`, movie);
  return result.data;
}

async function deleteMovie(id: number) {
  const result = await axios.delete(`${API_URL}/movies/${id}`);
  return result.data;
}

async function createMovie(movie: any) {
  const result = await axios.post(`${API_URL}/movies/`, movie);
  return result.data;
}

export default {
  fetchMovies,
  fetchMovie,
  fetchMoviesQueries,
  editMovie,
  deleteMovie,
  createMovie,
};
