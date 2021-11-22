import { useState } from "react";

const usePagination = ({ contentPerPage, count, currentPage, maxPages }) => {
  const [page, setPage] = useState(currentPage);
  // number of pages in total (total items / content on each page)
  const pageCount = Math.ceil(count / contentPerPage);
  // index of last item of current page
  const lastContentIndex = page * contentPerPage;
  // index of first item of current page
  const firstContentIndex = lastContentIndex - contentPerPage;

  // change page based on direction either front or back
  const changePage = (direction) => {
    setPage((state) => {
      // move forward
      if (direction) {
        // if page is the last page, do nothing
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // go back
      } else {
        // if page is the first page, do nothing
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSAFE = (num) => {
    // if number is greater than number of pages, set to last page
    if (num > pageCount) {
      setPage(pageCount);
      // if number is less than 1, set page to first page
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  //test area
  let startPage, endPage;
  if (pageCount <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = pageCount;
  } else {
    // total pages more than max so calculate start and end pages
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= pageCount) {
      // current page near the end
      startPage = pageCount - maxPages + 1;
      endPage = pageCount;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    pages,
  };
};

export default usePagination;
