import MovieModel from '../../models/Movie.model';
import GenreModel from '../../models/Genre.model';
import types from './types';

interface State {
  movies: MovieModel[],
  error: null,
  totalAmount: number,
  movie: MovieModel,
  genres: GenreModel[],
  queries: {
    sortBy: string,
    filter: string,
    search: string,
    sortOrder: string,
  }
}

const initialState: State = {
  movies: [],
  totalAmount: 0,
  error: null,
  movie: {} as MovieModel,
  genres: [{ label: 'All', value: '' }],
  queries: {
    sortBy: '',
    sortOrder: 'asc',
    filter: '',
    search: '',
  },
};

export const moviesReducer = (state = initialState, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: payload.data,
        totalAmount: payload.totalAmount,
      };
    }
    case types.SET_GENRES: {
      const genres = payload.data.map((item: MovieModel) => item.genres);
      const uniqueGenres = Array.from(new Set(genres.flat()));
      const mapGenres: GenreModel[] = uniqueGenres.map((genre: string) => ({ label: genre, value: genre }));
      return {
        ...state,
        genres: [...state.genres, ...mapGenres],
      };
    }
    case types.FETCH_MOVIE_SUCCESS:
      return { ...state, movie: payload };
    case types.EDIT_MOVIE_SUCCESS: {
      const filteredMovies = state.movies.filter((item: MovieModel) => item.id !== action.payload.id);
      return { ...state, movies: [...filteredMovies, action.payload] };
    }
    case types.DELETE_MOVIE_SUCCESS:
      return { ...state, movies: state.movies.filter((item: MovieModel) => item.id !== action.payload) };
    case types.CREATE_MOVIE_SUCCESS:
      return { ...state, movies: [...state.movies, payload] };
    case types.SET_QUERY:
      return { ...state, queries: { ...state.queries, [payload.type]: payload.value } };
    case types.FETCH_MOVIES_ERROR:
    case types.FETCH_MOVIE_ERROR:
    case types.EDIT_MOVIE_ERROR:
    case types.DELETE_MOVIE_ERROR:
    case types.CREATE_MOVIE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
