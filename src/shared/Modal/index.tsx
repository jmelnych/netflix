import React from 'react';
import './modal.scss';

interface ModalProps {
    title?: string,
    children: any,
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
        <div className="gist">
          <span role="button" tabIndex={0} className="close" onClick={closeModal}>+</span>
          <div className="content">
            {title && <div className="title">{title}</div>}
                {...children}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
// <div className="window" role="tooltip" tabIndex={0} onBlur={toggle}>
