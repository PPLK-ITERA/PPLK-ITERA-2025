import React from "react";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
} from "@/Components/ui/pagination";

interface PaginationFAQProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PaginationFAQ: React.FC<PaginationFAQProps> = ({
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

    return (
        <Pagination>
            <PaginationContent className="mt-5">
                <PaginationItem>
                    <button
                        onClick={handlePreviousClick}
                        className={`rounded-[10px] border bg-white px-2 py-2 text-black ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
                        aria-label="Go to previous page"
                    >
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
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            onClick={() => onPageChange(index + 1)}
                            isActive={currentPage === index + 1}
                            className={`rounded-[10px] border px-3 py-1 ${currentPage === index + 1 ? "bg-jaffa-600 text-white hover:bg-jaffa-600 hover:text-white pointer-events-none" : "bg-white text-black cursor-pointer"}`}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <button
                        onClick={handleNextClick}
                        className={`rounded-[10px] border bg-white px-2 py-2 text-black ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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

export default PaginationFAQ;
