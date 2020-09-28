import React from 'react';
import { useDispatch } from 'react-redux';
import './select.scss';
import moviesAction from '../../redux/movies/actions';

interface SelectProps {
  options: [],
  labelTitle: string,
  additionalClass?: string,
}

const Select = ({ options, labelTitle, additionalClass }: SelectProps) => {
  const dispatch = useDispatch();

  const handleUpdate = (evt: any) => {
    dispatch(moviesAction.updateQuery({ type: 'sortBy', value: evt.target.value }));
  };

  return (
    <div className="content__sort">
      <label className="label">{labelTitle}</label>
      <div className="select__wrapper">
        <div className={`select ${additionalClass}`}>
          <select name="select" onChange={handleUpdate}>
            {options.map(({ label, value }) => (
              <option
                key={value}
                value={value}

              >
                {label}
              </option>
            ))}
          </select>
          <span className="select__arrow" />
        </div>
      </div>
    </div>
  );
};

export default Select;
