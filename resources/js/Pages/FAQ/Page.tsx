import React, { useState } from "react";
import Accordion from "@/Components/ui/accordion";
import Pagination from "@/Components/ui/pagination";
import { faqs } from "@/lib/data/faq";

const Page: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;

    const filteredFaqs = faqs.filter(faq =>
        faq.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
    const currentItems = filteredFaqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="text-center w-full flex flex-col h-screen relative">
            <div>
                <h2 className="font-avigea text-jaffa-900 text-[39px] mt-[174px]">Frequently Asked Question</h2>
                <div className="max-w-2xl mx-auto mt-7">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Cari pertanyaan disini..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="text-[20px] w-full px-6 py-4 border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#864D0D] pl-12 placeholder-black"
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
                            className="absolute left-3 text-black"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </div>
                </div>
                <div className="mt-[56px] mx-[142px]">  
                    <Accordion items={currentItems} />
                    <Pagination
                     currentPage={currentPage}
                     totalPages={totalPages}
                     onPageChange={(page) => setCurrentPage(page)}   
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
