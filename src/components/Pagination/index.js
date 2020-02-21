import React from 'react';
import range from '../../helpers/range';

function Pagination({ totalPage, currentPage, onTargetPageClick = () => {} }) {
  const pages = range({ from: 1, to: totalPage });
  return pages.map(page => (
    <button
      disabled={currentPage === page}
      onClick={() => onTargetPageClick(page)}
    >
      {page}
    </button>
  ));
}

export default Pagination;
