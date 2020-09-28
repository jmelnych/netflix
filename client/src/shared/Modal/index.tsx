import React, { ReactNode } from 'react';
import './modal.scss';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/modals/actions';

interface ModalProps {
  title?: string,
  children: ReactNode,
}

const Modal = ({ children, title }: ModalProps) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return (

    <div className="modal">
      <div className="modal__gist">
        <span role="button" tabIndex={0} className="close" onClick={closeModal}>+</span>
        <div className="modal__content">
          {title && <div className="modal__title">{title}</div>}
          {children}
        </div>
      </div>
    </div>

  );
};

export default Modal;
