import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import MovieModel from '../../models/Movie.model';
import { RootState } from '../../redux/rootReducers';
import movieActions from '../../redux/movies/actions';

const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.fetchMovies());
  }, []);

  const movies: MovieModel[] = useSelector((state: RootState) => state.moviesReducer.movies);

  return (
    <ul className="movies">
      {movies.map((movie:MovieModel) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
