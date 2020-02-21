import React from 'react';

function TableRow({ labels }) {
  return (
    <thead>
      <tr>
        {labels.map(label => (
          <th>{label}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableRow;
