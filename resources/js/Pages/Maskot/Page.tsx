import { useAos } from "@/lib/hooks/useAos";

import React from "react";

import Footer from "@/Components/Footer";
import { CarouselMaskot } from "@/Components/Maskot";
import Navbar from "@/Components/Navbar";

import overlay_earth from "!assets/overlay-earth.png";

function Page() {
    useAos();
    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-pattern-white relative justify-center items-center pt-20">
                <div className="flex flex-col mt-16 items-center text-center">
                    <h1
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="font-avigea text-4xl md:text-5xl lg:text-6xl text-jaffa-900 max-lg:-mt-20"
                    >
                        Maskot PPLK ITERA 2024
                    </h1>
                    <div className="py-4 lg:py-20 w-full">
                        <CarouselMaskot />
                    </div>
                </div>
                <div className="mt-10">
                    <img
                        src={overlay_earth}
                        alt="Overlay Earth"
                        className="w-full"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
