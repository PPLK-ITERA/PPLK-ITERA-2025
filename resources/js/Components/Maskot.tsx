import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/CarouselMaskot";
import { Card, CardContent } from "@/Components/ui/card";

import maskot1 from "!assets/maskotchapabel.png";
import maskot2 from "!assets/maskotchapabel.png";
import maskot3 from "!assets/maskotchapabel.png";

export function CarouselMaskot() {
    const maskots = [
        {
            h2: "Hai! Aku,",
            h1: "Chapabel",
            description:
                "Hai, Aku Cephabel, Maskot PPLK 2023Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse non porta dolor.Interdum et malesuada fames ac ante ipsum primis in faucibus. Fuscecongue ac elit non sollicitudin.Aenean dictum ultricies massa, nontristique nunc.",
            imageSrc: maskot1,
        },
        {
            h2: "Hai! Aku,",
            h1: "Chapabel",
            description:
                "Hai, Aku Cephabel, Maskot PPLK 2023Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse non porta dolor.Interdum et malesuada fames ac ante ipsum primis in faucibus. Fuscecongue ac elit non sollicitudin.Aenean dictum ultricies massa, nontristique nunc.",
            imageSrc: maskot2,
        },
        {
            h2: "Hai! Aku,",
            h1: "Chapabel",
            description:
                "Hai, Aku Cephabel, Maskot PPLK 2023Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse non porta dolor.Interdum et malesuada fames ac ante ipsum primis in faucibus. Fuscecongue ac elit non sollicitudin.Aenean dictum ultricies massa, nontristique nunc.",
            imageSrc: maskot3,
        },
    ];

    return (
        <Carousel
            opts={{
                align: "center",
                loop: true
            }}
            className="relative mx-auto w-[350px] sm:w-3/4 pt-5"
        >
            <CarouselContent>
                {maskots.map((maskot, index) => (
                    <CarouselItem key={index}>
                        <div className="flex flex-col md:flex-row basis-full w-full">
                            <div className="flex justify-center">
                                <img
                                    src={maskot.imageSrc}
                                    alt={maskot.h1}
                                    className="h-[340px] w-[270px] md:h-[370px] md:w-[300px] lg:h-[420px] lg:w-[350px] bg-contain bg-no-repeat"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                />
                            </div>
                            <div className="flex-1">
                                <Card className="h-full rounded-none bg-transparent border-none py-10">
                                    <CardContent
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        className="flex flex-col justify-center p-2 text-justify"
                                    >
                                        <h2 className="font-avigea text-4xl mb-2">
                                            {maskot.h2}
                                        </h2>
                                        <h1 className="font-avigea text-6xl mb-6">
                                            {maskot.h1}
                                        </h1>
                                        <p className="font-montserrat text-[16px] lg:text-2xl font-semibold">
                                            {maskot.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious data-aos="zoom-in" data-aos-duration="1000" />
            <CarouselNext data-aos="zoom-in" data-aos-duration="1000" />
        </Carousel>
    );
}
