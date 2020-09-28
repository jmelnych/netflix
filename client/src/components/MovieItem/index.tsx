import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { VscSearch } from 'react-icons/vsc';
import Logo from '../../shared/Logo';
import MovieModel from '../../models/Movie.model';
import './movie-item.scss';
import { RootState } from '../../redux/rootReducers';
import { useDocumentTitle } from '../../shared/useDocumentTitle';

// TODO: create fallback for img

const Movie = () => {
  const movie: MovieModel = useSelector((state: RootState) => state.moviesReducer.movie);
  const title: string = movie.title || 'Netflix';

  useDocumentTitle(title);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [movie]);

  return (
    <section className="movie-item">
      <div className="wrapper">
        <div className="header__panel">
          <Logo />
          <span className="icon movie-item__search"><VscSearch /></span>
        </div>
        <div className="movie-item__details">
          <div className="movie-item__poster">
            <img src={movie.poster_path} alt={movie.title} />
          </div>
          <div className="movie-item__info">
            <div className="movie-item__block">
              <h2 className="movie-item__title">
                {movie.title}
              </h2>
              <span className="movie-item__rating">{movie.vote_average}</span>
            </div>
            <div className="movie-item__block">
              <div className="movie-item__release">{movie.release_date}</div>
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
};

export default Movie;
