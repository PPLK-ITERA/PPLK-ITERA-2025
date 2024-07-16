import { faqs } from "@/lib/data/faq";

import React, { useEffect, useState } from "react";

import { AccordionFAQ } from "@/Components/AccordionFAQ";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import PaginationFAQ from "@/Components/PaginationFAQ";
import { faqs } from "@/lib/data/faq";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useAos } from "@/lib/hooks/useAos";

const Page: React.FC = () => {
    useAos();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] =
        useState<string>(searchTerm);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const filteredFaqs = faqs.filter((faq) =>
        faq.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );

    const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
    const currentItems = filteredFaqs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    return (
        <div className="bg-pattern-white relative flex flex-col w-full min-h-screen text-center">
            <div>
                <Navbar isSolid={true} />
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="mt-20 font-avigea text-3xl text-jaffa-900 md:mt-40 md:text-[39px]"
                >
                    Frequently Asked Question
                </h2>
                <div className="mx-auto mt-10 max-w-2xl px-4 sm:px-6 md:mt-[40px] md:px-0">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="relative flex items-center"
                    >
                        <input
                            type="text"
                            placeholder="Cari pertanyaan disini..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-[10px] border border-[#864D0D] px-4 py-3 pl-10 text-base placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-6 sm:py-4 sm:pl-12 sm:text-lg md:text-[20px]"
                        />
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
                            className="left-3 absolute text-black"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="mx-4 mb-10 mt-10 sm:mx-10 md:mx-[142px] md:mb-[140px] md:mt-[56px]"
                >
                    <AccordionFAQ items={currentItems} />
                    <PaginationFAQ
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
            <div className="text-left">
                <Footer />
            </div>
        </div>
    );
};

export default Page;
