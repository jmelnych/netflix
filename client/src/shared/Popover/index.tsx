import React, { ReactNode, useState, useRef } from 'react';
import './popover.scss';
import useOutsideClick from '../useOutsideClick';

interface PopoverProps {
    children: ReactNode,
}

const Popover = ({ children }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));

  return (
    <>
      <div role="button" tabIndex={0} className="movie__button" onClick={toggle}>...</div>
      {isOpen && (
        <div ref={wrapperRef} className="popover">
          <div className="popover__gist">
            <span role="button" tabIndex={0} className="popover__close" onClick={toggle}>+</span>
            <div className="content">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const areEqual = (prevProps: any, nextProps: any) => prevProps.children.key === nextProps.children.key;

export default React.memo(Popover, areEqual);
