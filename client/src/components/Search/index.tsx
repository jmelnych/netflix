import React from 'react';
import './search.scss';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const Search = () => (
  <div className="search">
    <h1 className="search__title">Find your movie</h1>
    <div className="search__container">
      <Input
        type="text"
        additionalClass="search__input"
        placeholder="What do you want to watch?"
      />
      <Button type="submit" additionalClass="search__btn" color="primary">Search</Button>
    </div>
  </div>
);

export default Search;
