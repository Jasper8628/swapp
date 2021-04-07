import React, { useEffect } from 'react';
import TableRow from '../tableRow/tableRow';
import { useSelector, useDispatch } from 'react-redux';
function Table() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'TAB', payload: 'people' });
    console.log('useEffect successful')
  }, []);

  const table = useSelector(state => state.table);
  const keys = Object.keys(table[0]).slice(0, 3);
  return (
    <div>
      <table >
        <tr>
          {keys.map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
        {table.map((item, index) => (
          <TableRow data={item} index={index} />
        ))}
      </table>
    </div>
  )
}

export default Table
