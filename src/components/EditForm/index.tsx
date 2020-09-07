import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import Input from '../../shared/Input';
import Select from '../../shared/Select';
import { movies } from '../Content/mock';

interface EditFormProps {
    movieId: number,
    closeModal: Function,
}

const movie = movies[0];

const EditForm = ({ movieId, closeModal }: EditFormProps) => (
  <Modal type="modal" title="Edit movie" closeModal={closeModal}>
    <Input
      additionalClass="input--readonly"
      readonly
      type="text"
      label="Movie id"
      value={(movieId).toString()}
    />
    <Input
      onChange={() => console.log('change')}
      type="text"
      label="Title"
      value={movie.title}
    />
    <Input
      onChange={() => console.log('change')}
      type="text"
      label="Release date"
      icon={<FaCalendar />}
      value={(movie.releaseDate).toString()}
    />
    <Input
      onChange={() => console.log('change')}
      type="text"
      label="Movie url"
      value={movie.tagline}
    />
    <Select label="Genre" options={movie.genres} />
    <Input
      onChange={() => console.log('change')}
      type="text"
      label="Overview"
      value={movie.overview}
    />
    <Input
      onChange={() => console.log('change')}
      type="text"
      label="Runtime"
      value={(movie.runtime).toString()}
    />
    <div className="modal__button-group">
      <Button type="submit" color="glassy" additionalClass="modal__btn">Reset</Button>
      <Button type="submit" color="primary" additionalClass="modal__btn">Confirm</Button>
    </div>
  </Modal>
);

export default EditForm;
