import React from 'react';

function TableHeader({ labels }) {
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

export default TableHeader;
