import Autoplay from "embla-carousel-autoplay";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import { DetailUPTData } from "@/lib/data/upa";

import sponsor_overlay from "!assets/sponsor-overlay.png";

export default function KegiatanUnggulan({ kegiatanUnggulan }) {
    return (
        <div className="relative bg-pattern-white bg-[#170C0A] z-10">
            <div className="max-w-72 mx-auto text-center -translate-y-5">
                <div className="rounded-full bg-gradient-to-r from-[#864D0D] to-[#432005] border border-white py-2">
                    <p className="font-montserrat text-lg text-white">
                        KEGIATAN UNGGULAN
                    </p>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="scroll-smooth max-w-[1920px] xl:pl-36 lg:pl-20 md:pl-10 relative w-full pl-5 mx-auto mt-20"
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent>
                    {kegiatanUnggulan.map((kegiatan, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-72 md:basis-80 xl:basis-[26rem] border-none"
                        >
                            <Card
                                className={`xl:w-[400px] border-none md:w-[300px] lg:w-[310px] md:h-[550px] w-[280px] h-[500px] xl:h-[600px] overflow-hidden rounded-lg relative font-montserrat`}
                            >
                                <CardContent className="absolute top-0 z-20 p-4 text-white">
                                    <p className="opacity-90 z-20">
                                        {kegiatan.tanggal}
                                    </p>
                                </CardContent>

                                <img
                                    src={kegiatan.img}
                                    alt=""
                                    className="brightness-50 absolute top-0 object-cover w-full h-full"
                                />

                                <CardContent className="absolute min-h-[180px] w-full lg:min-h-[200px] bottom-0 p-4 mx-auto bg-white border">
                                    <h3 className="font-bold text-[12px] lg:text-[14px] xl:text-[16px]">
                                        {kegiatan.title}
                                    </h3>

                                    <p className="mt-5 text-[10px] lg:text-[12px]">
                                        {kegiatan.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <img
                src={sponsor_overlay}
                alt="sponsor_overlay"
                className="w-full mt-10"
            />
        </div>
    );
}
