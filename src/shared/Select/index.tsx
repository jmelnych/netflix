import React from 'react';
import './select.scss';

interface SelectProps {
    options: string[],
    label?: string,
    additionalClass?: string,
}
const Select = ({ options, label, additionalClass }: SelectProps) => (
  <div className={`select ${additionalClass}`}>
    <label className="label">{label}</label>
    <div className="select__wrapper">
      <select name="select">
        {options.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <span className="select__arrow" />
    </div>
  </div>
);

export default Select;
