/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function VillagerControls({ currentPage, incrementPage, decrementPage, villagers }) {
  return (
    <nav>
      <button aria-label="prev-page" onClick={decrementPage} disabled={currentPage <= 1}>&lt;</button>
      <span> page {currentPage} </span>
      <button aria-label="next-page" onClick={incrementPage} disabled={villagers.length < 25}>&gt;</button>
    </nav>
  );
}

VillagerControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
  villagers: PropTypes.array.isRequired
};
