import React from 'react';
import PropTypes from 'prop-types';

export default function VillagerControls({ currentPage, totalPages }) {
  return (
    <nav>
      <button aria-label="prev-page">&lt;</button>
      <p>page {currentPage} of {totalPages} </p>
      <button aria-label="next-page">&gt;</button>
    </nav>
  );
}

VillagerControls.propTypes = {
  currentPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,

};
