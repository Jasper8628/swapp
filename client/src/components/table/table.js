import React, { useEffect } from 'react';
import TableRow from '../tableRow/tableRow';
import { useSelector, useDispatch } from 'react-redux';
function Table() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'TAB', payload: 'people' });
  }, []);

  const table = useSelector(state => state.table);
  const keys = Object.keys(table[0]).slice(0, 3);
  return (
    <div className='tableContainer'>
      <table >
        <thead>
          <tr>
            {keys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <TableRow key={index} data={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
