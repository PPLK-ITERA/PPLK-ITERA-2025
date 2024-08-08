import React from "react";

import { Link } from "@inertiajs/react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/CarouselMaskot";

import { useAos } from "@/lib/hooks/useAos";

import maskot from "!assets/maskotchapabel.png";

export default function Maskot() {
    useAos();

    return (
        <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="flex min-h-[100vh] flex-col-reverse items-center justify-center gap-10 pb-20 md:flex-row md:gap-0 md:pb-10 lg:pb-0"
        >
            <div className="md:w-[50%] md:items-start md:text-left lg:w-3/5 z-10 flex flex-col items-center justify-center w-full px-10 text-center">
                <h2 className="font-avigea md:text-2xl lg:text-4xl w-full text-xl text-white">
                    Kenalan Sama
                    <br />
                    Maskot PPLK 2024!
                </h2>

                <p className="mt-5 font-montserrat text-[16px] font-normal text-white/80 md:text-lg lg:max-w-[80%] lg:text-2xl">
                    Coming Soon
                </p>

                <Link
                    href="/informasi/maskot"
                    className="mt-10 rounded-[6px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                >
                    Informasi Maskot &#x2192;
                </Link>
            </div>

            <div className="md:w-[50%] lg:w-2/5 items-center justify-center w-full h-full text-white hidden">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="relative mx-auto w-[320px] sm:w-3/4 pt-5 z-10"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="md:flex-row basis-full flex flex-col w-full">
                                <div className="flex justify-center">
                                    <img
                                        src={maskot}
                                        alt="maskot pplk"
                                        className="h-[340px] w-[270px] md:h-[370px] md:w-[300px] lg:h-[420px] lg:w-[350px] bg-contain bg-no-repeat"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    />
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div className="md:flex-row basis-full flex flex-col w-full">
                                <div className="flex justify-center">
                                    <img
                                        src={maskot}
                                        alt="maskot pplk"
                                        className="h-[340px] w-[270px] md:h-[370px] md:w-[300px] lg:h-[420px] lg:w-[350px] bg-contain bg-no-repeat"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="-left-5 md:-left-5" />
                    <CarouselNext className="-right-5 md:-right-5" />
                </Carousel>
            </div>
        </div>
    );
}
