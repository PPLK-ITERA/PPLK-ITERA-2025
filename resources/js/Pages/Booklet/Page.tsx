import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { CarouselBooklet } from "@/Components/booklet/ScrollBooklet";

import { Booklet } from "@/lib/types/Booklet";

function Page({ response }: { response: any }) {
    const booklets: Booklet[] = response.data;

    console.log(booklets);

    return (
        <div className="bg-pattern-white flex flex-col min-h-screen">
            <Navbar isSolid={true} />

            <div className="md:pt-20 lg:pt-28 flex flex-col items-center justify-start flex-grow min-h-screen p-4 pt-10 pb-24 text-center">
                <h1 className="text-[25px] sm:text-[39px] md:text-[49px] font-avigea bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent w-fit mb-2">
                    Booklet
                </h1>

                <p className="text-[16px] sm:text-[20px] font-montserrat font-[400] text-moccaccino-950 mb-8 max-w-4xl">
                    Halaman ini menyediakan daftar booklet untuk membantu
                    mahasiswa memahami konteks tugas yang diberikan. Periksa
                    secara berkala untuk materi terbaru dan informasi penting.
                    Tingkatkan kemampuan Anda melalui panduan terperinci yang
                    tersedia di sini.
                </p>

                <div className="w-full mt-[40px] sm:mt-[60px] flex justify-center">
                    <CarouselBooklet booklets={booklets} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
