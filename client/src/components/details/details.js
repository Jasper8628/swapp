import React from 'react';
import { useSelector } from 'react-redux';

function Details({ selectDetails }) {
  const details = useSelector(selectDetails);
  const keys = Object.keys(details);
  return (
    <div className='detailsContainer'>
      <h3>Details Section</h3>
      {keys.map(key => (
        <p key={key} >{key}: {details[key]} </p>
      ))}
    </div>
  );
};

export default Details;
