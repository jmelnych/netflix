import React from 'react';
import './navigation.scss';

interface NavigationProps {
    items: string[],
}

const activeItem = 0;

const Navigation = ({ items }: NavigationProps) => (
  <ul className="nav">
    {items.map((item, idx) => (
      <li
        className={`nav__item ${activeItem === idx ? 'nav__item--active' : ''}`}
        key={item}
      >
        {item}
      </li>
    ))}
  </ul>
);

export default Navigation;
