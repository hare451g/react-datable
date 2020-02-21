import React from 'react';
import TableCell from '../TableCell';

function TableBody({ values = [] }) {
  return (
    <tbody>
      {values.map(rows => (
        <tr>
          {rows.map(cell => (
            <TableCell
              type={cell.type}
              value={cell.value}
              defaultValue={cell.defaultValue}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
