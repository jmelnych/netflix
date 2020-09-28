import React from 'react';
import './movie.scss';
import { useDispatch } from 'react-redux';
import Popover from '../../shared/Popover';
import MovieModel from '../../models/Movie.model';
import { modalNames } from '../AppModals';
import movieActions from '../../redux/movies/actions';
import modalActions from '../../redux/modals/actions';

interface MovieItemProps {
    movie: MovieModel,
}

const MovieCard = ({ movie }: MovieItemProps) => {

  const dispatch = useDispatch();
  const selectMovie = () => {
    dispatch(movieActions.fetchMovie(movie.id));
  };

  const openModal = (evt: any) => {
    const modalName = evt.target.getAttribute('modal-name');
    dispatch(modalActions.openModal({ modalName, id: movie.id }));
  };

  return (
    <li className="movie__card">
      <img className="movie__img" src={movie.poster_path} alt={movie.title} />
      <Popover>
        <ul className="popover__list" key={`popover-${movie.id}`}>
          <li className="popover__item" modal-name={modalNames.editMovie} onClick={openModal}>
            Edit
          </li>
          <li className="popover__item" modal-name={modalNames.deleteMovie} onClick={openModal}>
            Delete
          </li>
        </ul>
      </Popover>

      <div role="button" tabIndex={0} className="movie__info" onClick={selectMovie}>
        <h3 className="movie__title">{movie.title}</h3>
        <span className="movie__release">{movie.release_date}</span>
        <p className="movie__genre">{movie.genres.join(', ')}</p>
      </div>
    </li>
  );
};

export default MovieCard;
