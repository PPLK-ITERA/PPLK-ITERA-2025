import React from "react";

import { CarouselMaskot } from "@/Components/CarouselMaskot";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

import overlay_earth from "!assets/overlay-earth.png";

function Page() {
    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-pattern-white relative justify-center items-center pt-20">
                <div className="flex flex-col mt-10 items-center text-center">
                    <h1 className="font-avigea text-[61px] text-jaffa-900">
                        Maskot PPLK ITERA 2024
                    </h1>
                    <div className="p-10">
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
