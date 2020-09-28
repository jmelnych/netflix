import React from 'react';
import './input.scss';

interface InputProps {
    type: 'text' | 'number'| 'password' | 'url' | 'date',
    readonly?:boolean,
    label?: string,
    value?: string,
    placeholder?: string,
    additionalClass?: string,
    onChange?: () => void,
    icon?: any,
}
const Input = ({
  type, label, value, placeholder, additionalClass, readonly, onChange, icon,
}: InputProps) => (
  <div className="input-container">
    {label && (<label className="label">{label}</label>)}
    <input
      onChange={onChange}
      readOnly={readonly}
      value={value}
      type={type}
      placeholder={placeholder}
      className={`input ${additionalClass}`}
    />
    { icon && <span className="icon">{icon}</span>}
  </div>
);

export default Input;
