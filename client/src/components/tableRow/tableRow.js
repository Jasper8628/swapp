import React from 'react';
import { useDispatch } from 'react-redux';
import { DETAILS } from '../../redux/types';

function TableRow({ data, index }) {
  const keys = Object.keys(data).slice(0, 3);
  const dispatch = useDispatch();
  return (
    <tr className='tableRow'  >
      <button onClick={() => dispatch({ type: DETAILS, payload: index })}>click for details</button>
      {keys.map(key => (
        <td key={key} >
          {data[key]}
        </td>
      ))}
    </tr>
  )
}

export default TableRow