import React, { useEffect } from 'react';
import TableRow from '../tableRow/tableRow';
import { useSelector, useDispatch } from 'react-redux';

function Table({ selectTable, tableSize, changeDetails }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'TAB', payload: 'people' });
  }, []);

  const table = useSelector(selectTable);
  const keys = Object.keys(table[0]).slice(0, tableSize);
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
            <TableRow
              key={index}
              data={item}
              index={index}
              tableSize={tableSize}
              changeDetails={changeDetails} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
