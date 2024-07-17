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
            <div className="bg-pattern-white relative items-center justify-center pt-20">
                <div className="flex flex-col items-center mt-16 text-center">
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

                <div className="overflow-hidden h-[620px]">
                    <img
                        src={overlay_earth}
                        alt="Overlay Earth"
                        className="w-full h-[629px]"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
