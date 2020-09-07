import React from 'react';
import './button.scss';

interface ButtonProps {
    type: 'submit' | 'reset',
    additionalClass?: string,
    children: any,
    color: 'primary' | 'glassy',
    click?: any
}
const Button = ({
  type, color, additionalClass, children, click,
}: ButtonProps) => (
  <button type={type} onClick={click} className={`button button--${color} ${additionalClass}`}>
    {children}
  </button>
);

export default Button;
