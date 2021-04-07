import React from 'react';
import { useDispatch } from 'react-redux';

function TableRow({ data, index, tableSize, changeDetails }) {
  const dispatch = useDispatch();
  const keys = Object.keys(data).slice(0, tableSize);
  return (
    <tr
      className='tableRow'
      style={{ 'cursor': 'pointer' }}
      onClick={() => dispatch(changeDetails(index))}
    >
      {keys.map(key => (
        <td key={key} >
          {data[key]}
        </td>
      ))}
    </tr>
  )
}

export default TableRow
