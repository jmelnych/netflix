import React, { useState } from 'react';
import './navigation.scss';
import { useDispatch, useSelector } from 'react-redux';
import moviesAction from '../../redux/movies/actions';
import { RootState } from '../../redux/rootReducers';
import GenreModel from '../../models/Genre.model';

const Navigation = () => {
  const genres: GenreModel[] = useSelector((state: RootState) => state.moviesReducer.genres);
  const [activeItem, updateActive] = useState(genres[0].value);
  const dispatch = useDispatch();

  const handleUpdate = (value: string) => {
    updateActive(value);
    dispatch(moviesAction.updateQuery({ type: 'filter', value }));
  };

  return (
    <ul className="nav">
      {genres.map(({ label, value }: GenreModel) => (
        <li
          className={`nav__item ${activeItem === value ? 'nav__item--active' : ''}`}
          key={value}
          onClick={() => handleUpdate(value)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
