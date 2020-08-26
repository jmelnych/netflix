import React from 'react';
import './button.scss';

type ButtonProps = {
    type: 'submit' | 'reset',
    additionalClass?: string,
    children: any,
    color: 'primary' | 'glassy',
}
const Button = ({
  type, color, additionalClass, children,
}: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={`button button--${color} ${additionalClass}`}>{children}</button>);

export default Button;
