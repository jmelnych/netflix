import React from 'react';
import MovieCard from '../MovieCard';
import { movies } from '../Content/mock';
import MovieModel from '../../models/Movie.model';

interface MovieListProps {
    openModal: (modalName:string, id: number) => void,
}

const MovieList = ({ openModal }: MovieListProps) => (
  <ul className="movies">
    {movies.map((movie:MovieModel) => (
      <MovieCard
        openModal={openModal}
        key={movie.id}
        movie={movie}
      />
    ))}
  </ul>
);

export default MovieList;
