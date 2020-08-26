import React from 'react';
import './movie.scss';

type MovieItemProps = {
    movie: any,
};

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('handleClick');
};
const MovieItem = ({ movie }: MovieItemProps) => (
  <li className="movie__item">
    <img className="movie__img" src={movie.cover} alt={movie.title} />
    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
    <div className="movie__button" onClick={() => {}} onKeyUp={handleClick}>...</div>
    <div className="movie__info">
      <h3 className="movie__title">{movie.title}</h3>
      <span className="movie__release">{movie.release}</span>
      <p className="movie__genre">{movie.genres.join(', ')}</p>
    </div>
  </li>
);

export default MovieItem;
