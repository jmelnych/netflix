import React, { useCallback, useEffect, useState } from 'react';
import './content.scss';
import { movies, genres, sortOptions } from './mock';
import Navigation from '../../shared/Navigation';
import MovieList from '../MovieList';
import Select from '../../shared/Select';
import Header from '../Header';
import DeleteForm from '../DeleteForm';
import EditForm from '../EditForm';
import AddForm from '../AddForm';
import MovieItem from '../MovieItem';
import { useDocumentTitle } from '../../shared/useDocumentTitle';

export enum appModals {
  editMovie = 'editMovie',
  deleteMovie = 'deleteMovie',
  addMovie = 'addMovie',
}

const Content = () => {
  const [activeModal, setActiveModal] = useState('');
  const [movieIdModal, setMovieIdModal] = useState(-1);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieDetailId, setMovieDetailId] = useState(-1);

  const title = movieDetail && movieDetail.title || 'Netflix';
  useDocumentTitle(title);

  const selectedMovie = useCallback(() => movies.find((movie) => movie.id === movieDetailId),
    [movieDetailId]);

  useEffect(() => {
    setMovieDetail(selectedMovie);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [movieDetailId]);

  const openModal = useCallback((modalName:string, id?:number) => {
    setActiveModal(modalName);
    setMovieIdModal(id);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setMovieIdModal(null);
  }, []);

  const openActiveModal = (active:string) => {
    switch (active) {
      case appModals.addMovie:
        return (<AddForm closeModal={closeModal} />);
      case appModals.editMovie:
        return (<EditForm movieId={movieIdModal} closeModal={closeModal} />);
      case appModals.deleteMovie:
        return (<DeleteForm movieId={movieIdModal} closeModal={closeModal} />);
      default:
        return (<></>);
    }
  };

  return (
    <>
      { movieDetail ? <MovieItem movie={movieDetail} /> : <Header openModal={openModal} />}
      <main className="content">
        <div className="wrapper">
          <section className="content__panel">
            <Navigation items={['all', ...genres]} />
            <Select additionalClass="content__sort" label="Sort by" options={sortOptions} />
          </section>
          <div className="content__total">
            <span className="content__number">
              {movies.length}
              {' '}
            </span>
            movies found
          </div>
          <MovieList selectedMovie={setMovieDetailId} openModal={openModal} />
          {openActiveModal(activeModal)}
        </div>
      </main>
    </>
  );
};

export default Content;
