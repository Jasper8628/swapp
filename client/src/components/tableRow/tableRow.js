import React from 'react';
import { useDispatch } from 'react-redux';
import { DETAILS } from '../../redux/types';

function TableRow({ data, index }) {
  const dispatch = useDispatch();
  const keys = Object.keys(data).slice(0, 3);
  return (
    <tr className='tableRow' style={{ 'cursor': 'pointer' }} onClick={() => dispatch({ type: DETAILS, payload: index })}>
      {keys.map(key => (
        <td key={key} >
          {data[key]}
        </td>
      ))}
    </tr>
  )
}

export default TableRow
