import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import Input from '../../shared/Input';
import Select from '../../shared/Select';
import moviesAction from '../../redux/movies/actions';

const genres: any = ['Comedy'].map((genre: string) => ({ label: genre, value: genre }));

const AddForm = () => {
  const dumbMovie = {
    title: 'title',
    release_date: new Date(),
    poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    overview: 'string',
    genres: ['Comedy'],
    vote_average: 5,
    vote_count: 3,
    budget: 333,
    revenue: 444,
    runtime: 333,
    tagline: 'string',
  };

  const dispatch = useDispatch();

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(moviesAction.createMovie(dumbMovie));
  };

  return (
    <Modal title="Add movie">
      <form onSubmit={handleSubmit}>
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Title"
          placeholder="Title"
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Release date"
          icon={<FaCalendar />}
          placeholder="Select date"
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Movie url"
          placeholder="Movie url"
        />
        <Select labelTitle="Genre" options={genres} />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Overview"
          placeholder="Overview"
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Runtime"
          placeholder="Runtime"
        />
        <div className="modal__button-group">
          <Button type="submit" color="glassy" additionalClass="modal__btn">Reset</Button>
          <Button type="submit" color="primary" additionalClass="modal__btn">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddForm;
