import React from 'react';
import './content.scss';
import { movies, genres, sortOptions } from './mock';
import Navigation from '../../shared/Navigation';
import MovieList from '../MovieList';
import Sort from '../../shared/Select';

const Content = () => (
  <main className="content">
    <div className="wrapper">
      <div className="content__panel">
        <Navigation items={['all', ...genres]} />
        <Sort items={sortOptions} />
      </div>
      <div className="content__total">
        <span className="content__number">
          {movies.length}
          {' '}
        </span>
        movies found
      </div>
      <MovieList movies={movies} />
    </div>
  </main>
);

export default Content;
