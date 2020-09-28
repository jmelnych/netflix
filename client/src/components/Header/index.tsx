import React from 'react';
import { useDispatch } from 'react-redux';
import Search from '../Search';
import Button from '../../shared/Button';
import Logo from '../../shared/Logo';
import modalActions from '../../redux/modals/actions';
import { modalNames } from '../AppModals';

const Header = () => {
  const dispatch = useDispatch();
  const openAddModal = () => {
    dispatch(modalActions.openModal({ modalName: modalNames.addMovie }));
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
