import React from 'react';
import Search from '../Search';
import Button from '../../shared/Button';
import './header.scss';
import Logo from '../../shared/Logo';

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <div className="header__panel">
        <Logo />
        <Button type="submit" color="glassy">+ Add movie</Button>
      </div>
      <Search />
    </div>
  </header>
);

export default Header;
