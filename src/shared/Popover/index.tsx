import React, { ReactNode } from 'react';
import './popover.scss';

interface PopoverProps {
    isOpened: boolean,
    close: Function,
    children: ReactNode,
}

const Popover = ({ isOpened, close, children }: PopoverProps) => (
  isOpened && (
  <div className="popover">
    <div className="popover__gist">
      <span role="button" tabIndex={0} className="popover__close" onClick={() => close(false)}>+</span>
      <div className="content">
        {children}
      </div>
    </div>
  </div>
  )
);

export default Popover;
