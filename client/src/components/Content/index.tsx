import React from 'react';
import { useSelector } from 'react-redux';
import './content.scss';
import Navigation from '../../shared/Navigation';
import MovieList from '../MovieList';
import Select from '../../shared/Select';
import Header from '../Header';
import AppModals from '../AppModals';
import MovieItem from '../MovieItem';
import { RootState } from '../../redux/rootReducers';

const Content = () => {
  const totalAmount: number = useSelector((state: RootState) => state.moviesReducer.totalAmount);
  const selectedMovie: number = useSelector((state: RootState) => state.moviesReducer.movie.id);

  const options: any = [
    { label: 'Release date', value: 'release_date' },
    { label: 'Rating', value: 'vote_average' },
    { label: 'Duration', value: 'runtime' },
  ];

  return (
    <>
      { selectedMovie ? <MovieItem /> : <Header />}
      <main className="content">
        <div className="wrapper">
          <section className="content__panel">
            <Navigation />
            <Select options={options} additionalClass="content__sort" label="Sort by" />
          </section>
          <div className="content__total">
            <span className="content__number">
              {totalAmount}
              {' '}
            </span>
            movies found
          </div>
          <MovieList />
          <AppModals />
        </div>
      </main>
    </>
  );
};

export default Content;
