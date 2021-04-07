import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const details = useSelector(state => state.details);
  const keys = Object.keys(details);
  return (
    <div className='detailsContainer'>
      {keys.map(key => (
        <p key={key} >{key}: {details[key]} </p>
      ))}
    </div>
  );
};

export default Details;
