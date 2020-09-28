import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import moviesAction from '../../redux/movies/actions';
import { RootState } from '../../redux/rootReducers';

const DeleteForm = () => {
  const selectedMovieId: number = useSelector((state: RootState) => state.modalsReducer.selectedMovieId);
  const dispatch = useDispatch();

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(moviesAction.deleteMovie(selectedMovieId));
  };

  return (
    <Modal title="Delete movie">
      <form onSubmit={handleSubmit}>
        <p className="modal__text">
          Are you sure you want to delete this movie?
        </p>
        <div className="modal__button-group">
          <Button type="submit" color="primary" additionalClass="modal__btn">Confirm</Button>
        </div>
      </form>
    </Modal>
  );
};

export default DeleteForm;
