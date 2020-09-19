import React, { ReactNode } from 'react';
import './modal.scss';

interface ModalProps {
    title?: string,
    children: ReactNode,
    closeModal: any,
    type?: 'popover' | 'modal'
}

const Modal = ({
  children, title, type, closeModal,
}: ModalProps) => {
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Submit');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={type}>
        <div className="modal__gist">
          <span role="button" tabIndex={0} className="close" onClick={closeModal}>+</span>
          <div className="modal__content">
            {title && <div className="modal__title">{title}</div>}
            {children}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
