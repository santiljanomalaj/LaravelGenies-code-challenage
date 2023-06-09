import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevelopers } from '../actions/developer';

const DeveloperList = () => {
  const dispatch = useDispatch();
  const developers = useSelector(state => state.developer.developers);

  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  return (
    <div>
      <h1>Developers</h1>
      <ul>
        {developers.map(developer => (
          <li key={developer.id}>{developer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperList;