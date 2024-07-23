import DefaultLayout from "@/Layouts/DefaultLayout";

import React, { useEffect, useState } from "react";

import { CarouselUkm } from "@/Components/informasi/Ukm/CarouselUkm";
import Header from "@/Components/informasi/Ukm/Header";
import PaginationUKM from "@/Components/informasi/Ukm/PaginationUkm";

import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import gedung from "!assets/gedung-sponsor.png";

const Page: React.FC = () => {
    useAos();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);

    const updateItemsPerPage = () => {
        if (window.innerWidth >= 1024) {
            setItemsPerPage(8);
        } else {
            setItemsPerPage(6);
        }
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => {
            window.removeEventListener("resize", updateItemsPerPage);
        };
    }, []);

    const totalPages = Math.ceil(ukmData.length / itemsPerPage);
    const currentItems = ukmData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    return (
        <DefaultLayout>
            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                <Header />
            </div>

            <div>
                <div className="bg-pattern-white md:px-4 flex flex-col items-center py-20">
                    <CarouselUkm items={currentItems} />

                    <PaginationUKM
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />

                    <div className="flex h-[240px] md:w-[441px] w-[300px] flex-col rounded-lg bg-white bg-opacity-0"></div>
                </div>
            </div>

            <div className="flex items-center justify-center -mt-20">
                <img src={gedung} alt="" className="w-full" />
            </div>
        </DefaultLayout>
    );
};

export default Page;
