import React from 'react';
import TableRow from '../tableRow';
import { useSelector } from 'react-redux';
import './table.css';
function Table({ selectTable, tableSize, changeDetails }) {
  const table = useSelector(selectTable);
  const keys = Object.keys(table[0]).slice(0, tableSize);
  return (
    <div className='tableContainer' data-testid='table'>
      <table >
        <thead>
          <tr data-testid='table-tr'>
            {keys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody data-testid='table-tbody'>
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
