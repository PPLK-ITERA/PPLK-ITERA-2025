import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/Components/ui/pagination";

interface PaginationUKMProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationUKM: React.FC<PaginationUKMProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers: (number | string)[] = [];
  const neighborCount = 1; // Number of pages to show around the current page

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - neighborCount && i <= currentPage + neighborCount)
    ) {
      pageNumbers.push(i);
    } else if (
      i < currentPage - neighborCount ||
      i > currentPage + neighborCount
    ) {
      if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push("...");
      }
    }
  }

  return (
    <Pagination>
      <PaginationContent className="md:mt-10 mt-5">
        <PaginationItem>
          <button
            onClick={handlePreviousClick}
            className={`rounded-[10px] border bg-white px-2 py-2 text-black ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
            aria-label="Go to previous page"
          >
            {/* Previous Page Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
        </PaginationItem>

        {pageNumbers.map((number: any, index) => (
          <PaginationItem key={index}>
            {number === "..." ? (
              <span className="px-3 py-1">...</span>
            ) : (
              <PaginationLink
                onClick={() => onPageChange(number)}
                isActive={currentPage === number}
                className={`rounded-[10px] border px-3 py-1 ${currentPage === number ? "bg-jaffa-600 text-white hover:bg-jaffa-600 hover:text-white pointer-events-none" : "bg-white text-black cursor-pointer"}`}
              >
                {number}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <button
            onClick={handleNextClick}
            className={`rounded-[10px] border bg-white px-2 py-2 text-black ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
          >
            {/* Next Page Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationUKM;
