import React from 'react';
import './input.scss';

type InputProps = {
    type: 'text' | 'password',
    placeholder?: string,
    additionalClass?: string,
}
const Input = ({ type, placeholder, additionalClass }: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className={additionalClass}
  />
);

export default Input;
