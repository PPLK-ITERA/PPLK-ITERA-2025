import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import React, { useEffect, useState } from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { CarouselUkm } from "@/Components/informasi/Ukm/CarouselUkm";
import PaginationInformasi from "@/Components/informasi/Ukm/PaginationUkm";

import gedung from "!assets/gedung-sponsor.png";

const Page: React.FC = () => {
    useAos();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);

    const updateItemsPerPage = () => {
        if (window.innerWidth >= 1024) {
            setItemsPerPage(10);
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
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-desktop-hero-background relative flex items-center justify-center min-h-screen p-5 -mb-20 bg-center bg-cover">
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="flex max-w-[640px] max-h-[640px] sm:max-h-fit sm:max-w-3xl md:max-h-2xl md:max-w-7xl flex-col items-center justify-center rounded-[20px] bg-white/20 backdrop-blur shadow-2xl text-white"
                >
                    <div className="flex flex-col items-start p-5 text-left">
                        <h1 className="font-montserrat-4xl text-[31px] sm:text-[40px] md:text-[61px] font-semibold">
                            UNIT KEGIATAN MAHASISWA (UKM)
                        </h1>
                        <p className="font-montserrat-2xl text-[20px] md:text-[25px] mt-5">
                            Unit Kegiatan Mahasiswa adalah sebuah organisasi
                            yang mewadahi berbagai minat & bakat mahasiswa di
                            Institut Teknologi Sumatera. UKM hadir untuk bisa
                            memfasilitasi semua minat & bakat dari seluruh
                            Mahasiswa Institut Teknologi Sumatera.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-pattern-white flex flex-col items-center py-20">
                    <CarouselUkm items={currentItems}  />
                    <PaginationInformasi
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
            <Footer />
        </div>
    );
};

export default Page;
