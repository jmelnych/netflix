import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import Logo from '../../shared/Logo';
import MovieModel from '../../models/Movie.model';
import './movie-item.scss';

interface MovieProps {
  movie: MovieModel,
}

const Movie = ({ movie }: MovieProps) => (
  <section className="movie-item">
    <div className="wrapper">
      <div className="header__panel">
        <Logo />
        <span className="icon movie-item__search"><VscSearch /></span>
      </div>
      <div className="movie-item__details">
        <div className="movie-item__poster">
          <img src={movie.posterPath} alt={movie.title} />
        </div>
        <div className="movie-item__info">
          <div className="movie-item__block">
            <h2 className="movie-item__title">
              {movie.title}
            </h2>
            <span className="movie-item__rating">{movie.voteAverage}</span>
          </div>

          <div className="movie-item__block">
            <div className="movie-item__release">{movie.releaseDate}</div>
            <div className="movie-item__runtime">
              {movie.runtime}
              {' '}
              min
            </div>
          </div>

          <p className="movie-item__overview">{movie.overview}</p>
        </div>

      </div>
    </div>
  </section>
);

export default Movie;
