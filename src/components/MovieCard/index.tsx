import React, { useState } from 'react';
import './movie.scss';
import Popover from '../../shared/Popover';
import MovieModel from '../../models/Movie.model';
import { appModals } from '../Content';

interface MovieItemProps {
    movie: MovieModel,
    openModal: (modalName:string, id: number) => void,
    selectedMovie: (id: number) => void,
}

const MovieCard = ({ movie, openModal, selectedMovie }: MovieItemProps) => {
  const [showPopover, togglePopover] = useState(false);

  const showModal = (modalName?:string, id?:number) => {
    if (modalName && id) {
      openModal(modalName, id);
    }
    togglePopover((isShown) => !isShown);
  };

  return (
    <li className="movie__card">
      <img className="movie__img" src={movie.posterPath} alt={movie.title} />
      <div role="button" tabIndex={0} className="movie__button" onClick={() => togglePopover(true)}>...</div>

      <Popover isOpened={showPopover} close={togglePopover}>
        <ul className="popover__list">
          <li className="popover__item" onClick={() => showModal(appModals.modalEditMovie, movie.id)}>
            Edit
          </li>
          <li className="popover__item" onClick={() => showModal(appModals.modalDeleteMovie, movie.id)}>
            Delete
          </li>
        </ul>
      </Popover>

      <div role="button" tabIndex={0} className="movie__info" onClick={() => selectedMovie(movie.id)}>
        <h3 className="movie__title">{movie.title}</h3>
        <span className="movie__release">{movie.releaseDate}</span>
        <p className="movie__genre">{movie.genres.join(', ')}</p>
      </div>
    </li>
  );
};

export default MovieCard;
