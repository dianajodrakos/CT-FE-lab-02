import React from 'react';
import PropTypes from 'prop-types';

export default function VillagerControls({ currentPage, totalPages }) {
  return (
    <nav>
      <button aria-label="prev-page">&lt;</button>
      <span> page {currentPage} of {totalPages} </span>
      <button aria-label="next-page">&gt;</button>
    </nav>
  );
}

VillagerControls.propTypes = {
  currentPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,

};
