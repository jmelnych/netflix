import { createAction } from 'redux-actions';
import types from './types';

const fetchMovies = createAction(types.FETCH_MOVIES);
const fetchMoviesSuccess = createAction(types.FETCH_MOVIES_SUCCESS);
const fetchMoviesError = createAction(types.FETCH_MOVIES_ERROR);
const fetchMovie = createAction(types.FETCH_MOVIE);
const fetchMovieSuccess = createAction(types.FETCH_MOVIE_SUCCESS);
const fetchMovieError = createAction(types.FETCH_MOVIE_ERROR);
const fetchMoviesQueries = createAction(types.FETCH_MOVIES_QUERIES);
const updateQuery = createAction(types.UPDATE_QUERY);
const setQuery = createAction(types.SET_QUERY);
const setGenres = createAction(types.SET_GENRES);
const editMovie = createAction(types.EDIT_MOVIE);
const editMovieSuccess = createAction(types.EDIT_MOVIE_SUCCESS);
const editMovieError = createAction(types.EDIT_MOVIE_ERROR);
const createMovie = createAction(types.CREATE_MOVIE);
const createMovieSuccess = createAction(types.CREATE_MOVIE_SUCCESS);
const createMovieError = createAction(types.CREATE_MOVIE_ERROR);
const deleteMovie = createAction(types.DELETE_MOVIE);
const deleteMovieSuccess = createAction(types.DELETE_MOVIE_SUCCESS);
const deleteMovieError = createAction(types.DELETE_MOVIE_ERROR);

export default {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMoviesQueries,
  updateQuery,
  setQuery,
  setGenres,
  editMovie,
  editMovieSuccess,
  editMovieError,
  createMovie,
  createMovieSuccess,
  createMovieError,
  deleteMovie,
  deleteMovieSuccess,
  deleteMovieError,
};
