import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import Input from '../../shared/Input';
import Select from '../../shared/Select';
import { genres } from '../Content/mock';

interface AddFormProps {
    closeModal: Function,
}

const AddForm = ({ closeModal }: AddFormProps) => (
  <Modal type="modal" title="Add movie" closeModal={closeModal}>
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
    <Select label="Genre" options={genres} />
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
  </Modal>
);

export default AddForm;
