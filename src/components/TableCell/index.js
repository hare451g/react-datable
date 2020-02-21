import React from 'react';
import moment from 'moment';

function TableCell({ type, value, defaultValue }) {
  switch (type) {
    case String:
      return <td>{value.toString()}</td>;
    case Number:
      return <td>{parseInt(value)}</td>;
    case Date:
      return <td>{moment(value).format('DD MMMM YYYY')}</td>;
    case 'Image':
      return (
        <td>
          <img src={value} alt={value} width={50} />
        </td>
      );
    default:
      return <td>{defaultValue.toString()}</td>;
  }
}

export default TableCell;
