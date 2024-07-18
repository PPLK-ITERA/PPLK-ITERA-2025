import React from "react";

import Footer from "@/Components/Footer";
import { CarouselMaskot } from "@/Components/Maskot";
import Navbar from "@/Components/Navbar";

import { useAos } from "@/lib/hooks/useAos";

import overlay_earth from "!assets/overlay-earth.png";

function Page() {
    useAos();

    return (
        <div className="overflow-hidden">
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-pattern-white relative items-center justify-center pt-20">
                <div className="mt-[105px] lg:mt-[55px] flex flex-col items-center text-center">
                    <h1
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="font-avigea md:text-5xl lg:text-6xl text-jaffa-900 max-lg:-mt-20 text-4xl"
                    >
                        Maskot PPLK ITERA 2024
                    </h1>

                    <div className="lg:py-20 w-full py-4">
                        <CarouselMaskot />
                    </div>
                </div>

                <div className="overflow-hidden h-[300px] lg:h-[620px]">
                    <img
                        src={overlay_earth}
                        alt="Overlay Earth"
                        className="w-full h-[329px] lg:h-[629px]"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
