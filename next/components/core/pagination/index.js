import React from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import PageItem from "./PageItem";
import usePagination from "../../../utils/usePagination";

const Pagination = ({ total, currentPage, pageSize, getCurrent, maxPages }) => {
  const { prevPage, totalPages, pages } = usePagination({
    contentPerPage: pageSize,
    count: total,
    currentPage: currentPage,
    maxPages: maxPages,
  });

  const handleClick = React.useCallback((number) => {
    getCurrent(number);
  }, []);

  return (
    <div className='flex justify-center space-x-2 '>
      <button
        className={`focus:outline-none border border-[#DFE3E8] p-2 rounded-full  ${
          currentPage === 1 ? "opacity-25" : "hover:bg-gray-100"
        }`}
        onClick={() => {
          prevPage();
          handleClick(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack className='text-dark-blue text-opacity-60' />
      </button>

      <div className='flex justify-between items-center'>
        {pages.map((item) => (
          <PageItem
            key={item}
            number={item}
            getClick={handleClick}
            active={currentPage}
          />
        ))}
      </div>

      <button
        className={`focus:outline-none border border-[#DFE3E8] p-2 rounded-full ${
          currentPage === totalPages ? "opacity-25" : "hover:bg-gray-100"
        }`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward className='text-dark-blue text-opacity-60' />
      </button>
    </div>
  );
};

export default Pagination;
