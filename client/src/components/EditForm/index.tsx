import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import Input from '../../shared/Input';
import Select from '../../shared/Select';
import { RootState } from '../../redux/rootReducers';
import MovieModel from '../../models/Movie.model';
import moviesAction from '../../redux/movies/actions';

const EditForm = () => {
  const movies: MovieModel[] = useSelector((state: RootState) => state.moviesReducer.movies);
  const selectedMovieId: number = useSelector((state: RootState) => state.modalsReducer.selectedMovieId);
  const selectedMovie: MovieModel = movies.find((movie: MovieModel) => movie.id === selectedMovieId);
  const genreOptions: any = selectedMovie.genres.map((genre: string) => ({ label: genre, value: genre }));
  const dispatch = useDispatch();

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(moviesAction.editMovie(selectedMovie));
  };

  return (
    <Modal title="Edit movie">
      <form onSubmit={handleSubmit}>
        <Input
          additionalClass="input--readonly"
          readonly
          type="text"
          label="Movie id"
          value={selectedMovieId.toString()}
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Title"
          value={selectedMovie.title}
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Release date"
          icon={<FaCalendar />}
          value={(selectedMovie.release_date).toString()}
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Movie url"
          value={selectedMovie.tagline}
        />
        <Select labelTitle="Genre" options={genreOptions} />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Overview"
          value={selectedMovie.overview}
        />
        <Input
          onChange={() => console.log('change')}
          type="text"
          label="Runtime"
          value={(selectedMovie.runtime).toString()}
        />
        <div className="modal__button-group">
          <Button type="reset" color="glassy" additionalClass="modal__btn">Reset</Button>
          <Button type="submit" color="primary" additionalClass="modal__btn">Confirm</Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditForm;
