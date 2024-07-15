import Autoplay from "embla-carousel-autoplay";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import gunung from "!assets/gunung.png";
import instagram from "!assets/instagram.png";
import tiktok from "!assets/tiktok.png";
import website from "!assets/website.png";
import youtube from "!assets/youtube.png";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

export default function KegiatanUnggulan() {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true }),
    );

    return (
        <div className="relative bg-pattern-white bg-[#170C0A]">
            <div className="text-center max-w-72 mx-auto -translate-y-4">
                <div className="rounded-full bg-gradient-to-r from-[#864D0D] to-[#432005] border border-white py-2">
                    <p className="text-lg text-white">KEGIATAN UNGGULAN</p>
                </div>
            </div>
            <MaxWidthWrapper className="relative flex flex-col items-center w-full">
             
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="scroll-smooth relative w-full mt-20"
                    plugins={[
                        Autoplay({
                            delay: 1000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="min-h-[200px] min-w-[200px] basis-1/5"
                            >
                                <div className="p-1">
                                    <Card className="p-1">
                                        <CardContent className="aspect-square flex items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Effect  */}
                    <div className="absolute inset-0 flex justify-between">
                        <div className="pointer-events-noneh h-full w-[50px] " />
                        <div className="pointer-events-none h-full w-[50px] " />
                    </div>
                </Carousel>
            </MaxWidthWrapper>
            <div className="mt-36">
                <div className="mx-auto max-w-sm md:max-w-md">
                    <div className="text-center">
                        <p className="font-bold text-jaffa-50 font-avigea tracking-widest text-2xl">
                            SOSIAL MEDIA FAKULTAS
                        </p>
                    </div>
                    <div className="flex justify-evenly mt-8 items-center">
                        <img src={instagram} alt="" className="md:w-20 md:h-20 w-14" />
                        <img src={youtube} alt="" className="md:w-20 md:h-20 w-14" />
                        <img src={website} alt="" className="md:w-24 w-14" />
                        <img src={tiktok} alt="" className="md:w-24 w-14" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 md:-mt-20">
                <img src={gunung} alt="" className="w-full" />
            </div>
        </div>
    );
}
