import { useState } from 'react';

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const incrementPage = () => setCurrentPage(currentPage + 1);
  const decrementPage = () => setCurrentPage(currentPage - 1);

  return {
    currentPage, 
    incrementPage,
    decrementPage
  };
};
