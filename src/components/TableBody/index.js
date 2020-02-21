import React from 'react';

function TableBody({ values = [] }) {
  return (
    <tbody>
      {values.map(rows => (
        <tr>
          {rows.map(cell => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
