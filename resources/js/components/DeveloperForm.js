import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDeveloper, updateDeveloper } from '../actions/developer';

const DeveloperForm = ({ developer, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(developer ? developer.name : '');
  const [email, setEmail] = useState(developer ? developer.email : '');
  const [phone, setPhone] = useState(developer ? developer.phone : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (developer) {
      dispatch(updateDeveloper(developer.id, name, email, phone));
    } else {
      dispatch(createDeveloper(name, email, phone));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email: </label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="phone">Phone: </label>
      <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button type="submit">{developer ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default DeveloperForm;