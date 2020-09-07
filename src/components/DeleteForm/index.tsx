import React from 'react';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';

interface DeleteFormProps {
    closeModal: Function,
    movieId: number,
}

const DeleteForm = ({ closeModal, movieId }: DeleteFormProps) => (
  <Modal type="modal" title="Delete movie" closeModal={closeModal}>
    <p className="modal__text">
      Are you sure you want to delete this movie
      {movieId}
      ?
    </p>
    <div className="modal__button-group">
      <Button type="submit" color="primary" additionalClass="modal__btn">Confirm</Button>
    </div>
  </Modal>
);

export default DeleteForm;
