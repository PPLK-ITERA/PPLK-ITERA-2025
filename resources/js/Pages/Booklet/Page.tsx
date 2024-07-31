import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { CarouselBooklet } from "@/Components/booklet/ScrollBooklet";

function Page() {
    return (
        <div className="bg-pattern-white flex flex-col min-h-screen">
            <Navbar isSolid={true} />

            <div className="md:pt-20 lg:pt-28 flex flex-col items-center justify-start flex-grow min-h-screen p-4 pt-10 pb-24 text-center">
                <h1 className="text-[25px] sm:text-[39px] md:text-[49px] font-avigea bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent w-fit mb-2">
                    Booklet
                </h1>

                <p className="text-[16px] sm:text-[20px] font-montserrat font-[400] text-moccaccino-950 mb-8 max-w-4xl">
                    Booklet adalah lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                </p>

                <div className="w-full mt-[40px] sm:mt-[60px] flex justify-center">
                    <CarouselBooklet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
