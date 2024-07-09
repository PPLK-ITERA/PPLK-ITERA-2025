import React from "react";
import Navbar from "@/Components/Navbar";
import { CarouselBooklet } from "@/Components/CarouselBooklet";
import Footer from "@/Components/Footer";

function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-pattern-white">
            <Navbar isSolid={true} />
            <div className="flex-grow flex flex-col items-center justify-start text-center p-4 pt-[30px] min-h-screen pb-24">
                <h1 className="text-[49px] font-avigea text-candlelight-700 mb-2">BOOKLET</h1>
                <p className="text-[25px] font-montserrat font-[500] text-moccaccino-950 mb-8 max-w-6xl">
                    Booklet adalah lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <div className="w-full mt-[80px] flex justify-center">
                    <CarouselBooklet />
                </div>
            </div>
            <div className="h-2"></div>
            <Footer />
        </div>
    );
}

export default Page;
