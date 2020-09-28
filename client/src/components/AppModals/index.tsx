import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducers';
import AddForm from '../AddForm';
import EditForm from '../EditForm';
import DeleteForm from '../DeleteForm';

export enum modalNames {
    editMovie = 'editMovie',
    deleteMovie = 'deleteMovie',
    addMovie = 'addMovie',
}

const AppModals = () => {
  const openModalName: string = useSelector((state: RootState) => state.modalsReducer.openModalName);

  switch (openModalName) {
    case modalNames.addMovie:
      return (<AddForm />);
    case modalNames.editMovie:
      return (<EditForm />);
    case modalNames.deleteMovie:
      return (<DeleteForm />);
    default:
      return (<></>);
  }
};

export default AppModals;
