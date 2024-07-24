import Autoplay from "embla-carousel-autoplay";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import { DataKegiatanFakultas, SocialMediaData } from "@/lib/data/fakultas";

import gunung from "!assets/gunung.png";

export default function KegiatanUnggulan({ fakultas }: { fakultas: string }) {
    return (
        <div className="relative bg-pattern-white bg-[#170C0A]">
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
                    {DataKegiatanFakultas.map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-72 md:basis-80 xl:basis-[26rem]"
                        >
                            <Card
                                className={`xl:w-[400px] md:w-[300px] lg:w-[310px] md:h-[550px] w-[280px] h-[500px] xl:h-[600px] overflow-hidden rounded-lg relative
                                        ${index + 1 === 1 ? "bg-mobile-hero-background bg-cover" : ""}
                                        ${index + 1 === 2 ? "bg-mobile-hero-background bg-cover" : ""}
                                        ${index + 1 === 3 ? "bg-mobile-hero-background bg-cover" : ""}
                                        ${index + 1 === 4 ? "bg-mobile-hero-background bg-cover" : ""}
                                        ${index + 1 === 5 ? "bg-mobile-hero-background bg-cover" : ""}
                                        font-montserrat`}
                            >
                                <CardContent className="p-4 text-white">
                                    <p className="opacity-90">20 Juli 2024</p>
                                    <h3 className="font-bold text-[20px]">
                                        Info Kegiatan SLurd
                                    </h3>
                                </CardContent>

                                {/* <img
                                        src={chabud}
                                        alt=""
                                        className="object-cover w-full h-full scale-x-[-1] absolute top-0"
                                    /> */}

                                <CardContent className="absolute bottom-0 flex flex-col items-start justify-center p-4 mx-auto bg-white border">
                                    <h3 className="font-bold">
                                        Judul Postingan {index + 1}
                                    </h3>

                                    <p className="mt-5">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi iste, nulla
                                        nihil neque consequatur
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="mt-36">
                <div className="md:max-w-md max-w-sm mx-auto">
                    <div className="text-center">
                        <p className="text-jaffa-50 font-avigea md:text-3xl text-xl font-bold tracking-widest">
                            SOSIAL MEDIA FAKULTAS
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-8">
                        {SocialMediaData[fakultas].map((socialMedia, index) => (
                            <a
                                key={index}
                                href={socialMedia.link}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-jaffa-100 z-10 p-2 rounded-full cursor-pointer"
                            >
                                {socialMedia.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:-mt-20 flex items-center justify-center mt-8">
                <img src={gunung} alt="" className="w-full" />
            </div>
        </div>
    );
}
