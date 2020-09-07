import React from 'react';
import './movie.scss';
import Modal from '../../shared/Modal';
import MovieModel from '../../models/Movie.model';
import { appModals } from '../Content';

interface MovieItemProps {
    movie: MovieModel,
    openModal: (modalName:string, id: number) => void,
}

interface MovieItemState {
    showPopover: boolean,
}

class MovieCard extends React.Component<MovieItemProps, MovieItemState> {
    state = {
      showPopover: false,
    }

    togglePopover = (modalName?:string, id?:number) => {
      const { openModal } = this.props;
      const { showPopover } = this.state;
      if (modalName && id) {
        openModal(modalName, id);
      }
      this.setState({ showPopover: !showPopover });
    }

    render() {
      const { movie } = this.props;
      const { showPopover } = this.state;
      return (
        <li className="movie__card">
          <img className="movie__img" src={movie.posterPath} alt={movie.title} />
          <div role="button" tabIndex={0} className="movie__button" onClick={() => this.togglePopover()}>...</div>
          {showPopover && (
            <Modal type="popover" closeModal={this.togglePopover}>
              <ul className="popover__list">
                <li className="popover__item" onClick={() => this.togglePopover(appModals.modalEditMovie, movie.id)}>
                  Edit
                </li>
                <li className="popover__item" onClick={() => this.togglePopover(appModals.modalDeleteMovie, movie.id)}>
                  Delete
                </li>
              </ul>
            </Modal>
          )}

          <div className="movie__info">
            <h3 className="movie__title">{movie.title}</h3>
            <span className="movie__release">{movie.releaseDate}</span>
            <p className="movie__genre">{movie.genres.join(', ')}</p>
          </div>
        </li>
      );
    }
}

export default MovieCard;
