import React, { useCallback } from 'react';
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
  const showModal = useCallback((evt: any) => {
    const modalName = evt.target.getAttribute('modal-name');
    openModal(modalName, movie.id);
  }, []);

  const selectMovie = () => {
    selectedMovie(movie.id);
  };

  return (
    <li className="movie__card">
      <img className="movie__img" src={movie.posterPath} alt={movie.title} />
      <Popover>
        <ul className="popover__list" key={`popover-${movie.id}`}>
          <li className="popover__item" modal-name={appModals.editMovie} onClick={showModal}>
            Edit
          </li>
          <li className="popover__item" modal-name={appModals.deleteMovie} onClick={showModal}>
            Delete
          </li>
        </ul>
      </Popover>

      <div role="button" tabIndex={0} className="movie__info" onClick={selectMovie}>
        <h3 className="movie__title">{movie.title}</h3>
        <span className="movie__release">{movie.releaseDate}</span>
        <p className="movie__genre">{movie.genres.join(', ')}</p>
      </div>
    </li>
  );
};

export default MovieCard;
