import React from 'react';
import './select.scss';

type SelectProps = {
    items: string[],
}
const Sort = ({ items }: SelectProps) => (
  <div className="select">
    <span className="select__label">Sort by</span>
    <div className="select__wrapper">
      <select name="select">
        {items.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <span className="select__arrow" />
    </div>
  </div>
);

export default Sort;
