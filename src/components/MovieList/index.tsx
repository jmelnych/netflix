import React from 'react';
import MovieItem from '../MovieItem';

type MovieListProps = {
    movies: any[],
};

const MovieList = ({ movies }: MovieListProps) => (
  <ul className="movie">
    {movies.map((movie) => (
      <MovieItem
        key={movie.id}
        movie={movie}
      />
    ))}
  </ul>
);

export default MovieList;
