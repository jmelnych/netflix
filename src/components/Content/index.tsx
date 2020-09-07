import React from 'react';
import './content.scss';
import { movies, genres, sortOptions } from './mock';
import Navigation from '../../shared/Navigation';
import MovieList from '../MovieList';
import Select from '../../shared/Select';
import Header from '../Header';
import DeleteForm from '../DeleteForm';
import EditForm from '../EditForm';
import AddForm from '../AddForm';

export enum appModals {
  modalEditMovie = 'modalEditMovie',
  modalDeleteMovie = 'modalDeleteMovie',
  modalAddMovie = 'modalAddMovie',
}

interface ContentProps {
}

interface ContentState {
  activeModal: string,
  movieId: number,
}

class Content extends React.Component<ContentProps, ContentState> {
  state = {
    activeModal: '',
    movieId: -1,
  };

  openModal = (modalName:string, id?:number) => {
    this.setState(() => ({
      activeModal: modalName,
      movieId: id,
    }));
  }

  closeModal = () => {
    this.setState(() => ({
      activeModal: null,
      movieId: null,
    }));
  }

  openActiveModal = (active:string) => {
    const { movieId } = this.state;
    switch (active) {
      case appModals.modalAddMovie:
        return (<AddForm closeModal={this.closeModal} />);
      case appModals.modalEditMovie:
        return (<EditForm movieId={movieId} closeModal={this.closeModal} />);
      case appModals.modalDeleteMovie:
        return (<DeleteForm movieId={movieId} closeModal={this.closeModal} />);
      default:
        return (<></>);
    }
  }

  render() {
    const { activeModal } = this.state;
    return (
      <>
        <Header openModal={this.openModal} />
        <main className="content">
          <div className="wrapper">
            <div className="content__panel">
              <Navigation items={['all', ...genres]} />
              <Select additionalClass="content__sort" label="Sort by" options={sortOptions} />
            </div>
            <div className="content__total">
              <span className="content__number">
                {movies.length}
                {' '}
              </span>
              movies found
            </div>
            <MovieList openModal={this.openModal} />
            {this.openActiveModal(activeModal)}
          </div>
        </main>
      </>
    );
  }
}

export default Content;
