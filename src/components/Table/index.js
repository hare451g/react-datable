import React from 'react';

import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

function Table({ headers = [], values = [] }) {
  return (
    <table>
      <TableHeader labels={headers} />
      <TableBody values={values} />
    </table>
  );
}

export default Table;
