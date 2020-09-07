import React from 'react';
import Search from '../Search';
import Button from '../../shared/Button';
import './header.scss';
import Logo from '../../shared/Logo';
import { appModals } from '../Content';

interface HeaderProps {
    openModal: (modalName:string) => void,
}

const Header = ({ openModal }:HeaderProps) => {
  const openAddModal = () => {
    openModal(appModals.modalAddMovie);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__panel">
          <Logo />
          <Button type="submit" color="glassy" click={openAddModal}>+ Add movie</Button>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
